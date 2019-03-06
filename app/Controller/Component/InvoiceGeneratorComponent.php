<?php
App::uses('Component', 'Controller');
App::uses('Invoice', 'Model');
App::uses('InvoiceElement', 'Model');
App::uses('Folder', 'Utility');
App::uses('File', 'Utility');

class InvoiceGeneratorComponent extends Component {
    
    public $components = array('Money', 'Rds.RdsValidation');
    
    protected $Invoice;
    protected $InvoiceElement;
	
	public function initialize(Controller $controller) {
	    
        $this->Invoice = new Invoice();
        $this->InvoiceElement = new InvoiceElement();
        
	}
    
    public function add($data) {
        
        $result = array(
            'data' => null,
            'errors' => null,
        );
        
        $this->Invoice->useValidationSet('add');
        $validationResult = $this->RdsValidation->validate($this->Invoice, $data);

        if ($validationResult === true) {
            $data['Invoice']['number'] = $this->generateInvoiceNumber();
            $folder = $this->getInvoiceFolder($data);
            
            if (!file_exists($folder)) {
                mkdir($folder, 0777, true);
            }
            
            $data['Invoice']['generation_type'] = 'manual';

            if ($this->Invoice->save($data)) {
                $invoiceId = $this->Invoice->getLastInsertID();
                foreach ($data['InvoiceElement']['element_name'] as $key=>$value) {
                    $this->InvoiceElement->useValidationSet('add');
                    $resultElement = $this->RdsValidation->validate($this->InvoiceElement, $data);

                    if ($resultElement === true) {
                        $elementData['invoice_id'] = $invoiceId;
                        $elementData['price_brutto'] = $data['InvoiceElement']['price_brutto'][$key];
                        $elementData['price_netto'] = $data['InvoiceElement']['price_netto'][$key];
                        $elementData['price_vat'] = $data['InvoiceElement']['price_vat'][$key];
                        $elementData['vat_value'] = $data['InvoiceElement']['vat_element'][$key];
                        $elementData['element_name'] = $value;
                        $this->InvoiceElement->create();
                        $this->InvoiceElement->save($elementData);
                    }
                }
                $this->generateInvoice($data);
                $result['data'] = array(
                    'redirect' => Router::url(array('controller' => 'invoices', 'action' => 'index'))
                );
            } else $result['errors'] = $this->Invoice->messages['save_error'];
            
        } else $result['errors'] = $validationResult;
        
        
        return $result;
        
    }
    
    public function generateInvoiceNumber() {
        
        $invoices = $this->Invoice->find('all', array(
            'conditions' => array(
                'created >=' => date("Y-m")."-01"
            )
        ));
        
        $count = count($invoices) + 1;
        
        $number = $count."/".date("m")."/".date("Y");
        
        return $number;
        
    }
    
    public function numberToFilename($fvNumber) {

        $fvName = str_replace(array('/', '.', '\\', ','), '_', $fvNumber);
        return 'fv'.$fvName.'.pdf';
        
    }
    
    public function getInvoiceFilename($invoice) {
        
        $fvFilename = $this->numberToFilename($invoice['Invoice']['number']);
        return $fvFilename;
        
    }
    
    public function getInvoiceFolder($invoice) {
        
        $folderName = substr(sha1($invoice['Invoice']['name']), 0, 8);
        return 'files/invoices/'.$folderName;
        
    }
    
    public function getInvoiceUrl($invoice) {
        
        $fvFilename = $this->getInvoiceFilename($invoice);
        $folderUrl = $this->getInvoiceFolder($invoice);
        return $folderUrl.'/'.$fvFilename;
        
    }
    
    /*
     * $data - info to invoice
     */
    public function generateInvoice($data) {
        
        require_once '../Lib/mpdf/mpdf.php';
        
        $daysMore = 14;
        $deadline = date("Y-m-d", strtotime(date("Y-m-d")) + $daysMore * 86400);
        
        $invoiceType = 'Faktura VAT';
        
        $html='';
                    $html .= '
                        <html>
                        <head>
                            <style>
                                body {
                                    font-family: DejaVuSans;
                                    font-size: 8pt;
                                }
                                p {
                                    margin: 0pt;
                                }
                                table.items {
                                    border: 0.1mm solid #000000;
                                }
                                td {
                                    vertical-align: top;
                                }
                                .items td {
                                    border-left: 0.1mm solid #000000;
                                    border-right: 0.1mm solid #000000;
                                    border-bottom: 0.1mm solid #000000;
                                }
                                .items2 td.cost {
                                    border-left: 0.1mm solid #000000;
                                    border-right: 0.1mm solid #000000;
                                    border-bottom: 0.1mm solid #000000;
                                    text-align: right;
                                }
                                .items2 td.bord {
                                    border-left: 0.1mm solid #000000;
                                    border-right: 0.1mm solid #000000;
                                    border-bottom: 0.1mm solid #000000;
                                }
                                table thead td {
                                    background-color: #EEEEEE;
                                    text-align: center;
                                    border: 0.1mm solid #000000;
                                }
                                .items td.blanktotal {
                                    background-color: #EEEEEE;
                                    border: 0.1mm solid #000000;
                                    background-color: #FFFFFF;
                                    border: 0mm none #000000;
                                    border-top: 0.1mm solid #000000;
                                    border-right: 0.1mm solid #000000;
                                }
                                .items .items2 td.totals {
                                    text-align: right;
                                    border: 0.1mm solid #000000;
                                }
                                .items td.cost {
                                    text-align: "." right;
                                }
                                .items2 td.cost {
                                    text-align: "." right;
                                }
                                .items2 td.emptycell {
                                    border: 0mm;
                                    border-top: 0mm;
                                    border-right: 0mm;
                                    background-color: null;
                                    text-align: right;
                                }
                                .orderNum {
                                    font-size: 12pt;
                                    font-weight: bold;
                                }
                            </style>
                        </head>
                        <body>
                        
                            <!--mpdf
                            <htmlpageheader name="myheader">
                            <table width="100%">
                                <tr>
                                    <td width="100%" style="color:#0000BB; "><img src="img/fv_header.png"></td>
                                </tr>
                                <tr>
                                    <td width="100%" style="text-align: right;">'.$invoiceType.'<br /><span style="font-weight: bold; font-size: 16pt;">'.$data['Invoice']['number'].'</span></td>
                                </tr>
                            </table>
                            </htmlpageheader>
                        
                            <htmlpagefooter name="myfooter">
                                <table width="100%" style="font-size: 7pt;">
                                    <tr>
                                        <td width="50%" style="text-align:left;">Podpis osoby upoważnionej do odebrania faktury</td>
                                        <td width="50%" style="text-align:right;">Podpis osoby upoważnionej do wystawienia faktury<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">&nbsp;</td>
                                    </tr>
                                </table>
                            </htmlpagefooter>
                            
                            <sethtmlpageheader name="myheader" value="on" show-this-page="1" />
                            <sethtmlpagefooter name="myfooter" value="on" />
                            mpdf-->
                        
                            <div style="text-align: right">
                                Data wystawienia faktury: '.date("Y-m-d").'
                                <br />
                                <br />
                            </div>
                        
                            <table width="100%" style="font-family: DejaVuSans;" cellpadding="10">
                                <tr>
                                    <td width="45%"><span style="font-size: 7pt; color: #555555; font-family: sans;">Sprzedawca:</span>
                                    <br />
                                    <br />
                                    accessPro Sp. z o.o.
                                    <br />
                                    ul. Marconich 3/33
                                    <br />
                                    02-954 Warszawa.
                                    <br />NIP: 951-237-68-94
                                    </td>
                                    <td width="10%">&nbsp;</td>
                                    <td width="45%"><span style="font-size: 7pt; color: #555555; font-family: sans;">Nabywca</span>
                                    <br />
                                    <br />
                                    '.$data['Invoice']['name'].' <br/>
                                    '.$data['Invoice']['address'].'
                                    </td>
                                </tr>
                            </table>
                        
                            <br />
                        
                            <table class="items" width="100%" style="font-size: 8pt; font-family: DejaVuSans; border-collapse: collapse; " cellpadding="5">
                                <thead>
                                    <tr>
                                        <td width="3%">Lp</td>
                                        <td width="33%">Nazwa towaru lub usługi</td>
                                        <td width="6%">PKWiU</td>
                                        <td width="7%">Symbol j.m.</td>
                                        <td width="6%">Ilość</td>
                                        <td width="11%">Cena netto</td>
                                        <td width="11%">Stawka</td>
                                        <td width="11%">Wartość netto</td>
                                        <td width="12%">Wartość brutto</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- ITEMS HERE -->';
                            $totalNetto = 0;
                            $totalBrutto = 0;
                            $totalVAT = 0;
                            
                            foreach ($data['InvoiceElement']['element_name'] as $key1 => $value1) {
                                $totalNetto = $totalNetto + $data['InvoiceElement']['price_netto'][$key1];
                                $totalVAT = $totalVAT + $data['InvoiceElement']['price_vat'][$key1];
                                $totalBrutto = $totalBrutto + $data['InvoiceElement']['price_brutto'][$key1];
                                $html .= '
                                    <tr>
                                        <td align="center">1</td>
                                        <td>'.$value1.'</td>
                                        <td>-</td>
                                        <td></td>
                                        <td align="center">1</td>
                                        <td class="cost">'.number_format($data['InvoiceElement']['price_netto'][$key1], 2, ',', ' ').'</td>
                                        <td class="cost">'.$data['InvoiceElement']['vat_element'][$key1].'%</td>
                                        <td class="cost">'.number_format($data['InvoiceElement']['price_netto'][$key1], 2, ',', ' ').'</td>
                                        <td class="cost">'.number_format($data['InvoiceElement']['price_brutto'][$key1], 2, ',', ' ').'</td>
                                    </tr>
                                ';
                            }
                                    
                    $html .='               
                                </tbody>
                            </table>
                            <br><br>
                            <table class="items2" width="100%" style="font-size: 8pt; font-family: DejaVuSans; border-collapse: collapse; " cellpadding="5">';
                    
                        $html.='<thead>
                                    <tr>
                                        <td width="15%">Stawka VAT</td>
                                        <td width="15%">Wartość netto</td>
                                        <td width="15%">Kwota VAT</td>
                                        <td width="15%">Wartość brutto</td>
                                        <td class="emptycell" width="10%"></td>
                                        <td class="emptycell" align="left" width="15%">Zapłacono</td>
                                        <td class="emptycell" width="15%">'.number_format($totalBrutto, 2, ',', ' ').' PLN</td>
                                    </tr>
                                </thead>';
                    
                    $html.='<tbody>';
                    
                        $html.='<tr>
                                        <td width="15%" align="center" class="bord">23%</td>
                                        <td width="15%" class="cost">'.number_format($totalNetto, 2, ',', ' ').'</td>
                                        <td width="15%" class="cost">'.number_format($totalVAT, 2, ',', ' ').'</td>
                                        <td width="15%" class="cost">'.number_format($totalBrutto, 2, ',', ' ').'</td>
                                        <td class="emptycell" width="10%"></td>
                                        <td class="emptycell" align="left" width="15%">Do zapłaty</td>
                                        <td class="emptycell" width="15%">0,00 PLN</td>
                                    </tr>
                                    <tr>
                                        <td width="15%" align="center" class="bord">Razem</td>
                                        <td width="15%" class="cost">'.number_format($totalNetto, 2, ',', ' ').'</td>
                                        <td width="15%" class="cost">'.number_format($totalVAT, 2, ',', ' ').'</td>
                                        <td width="15%" class="cost">'.number_format($totalBrutto, 2, ',', ' ').'</td>
                                        <td class="emptycell" width="10%"></td>
                                        <td class="emptycell" width="15%"></td>
                                        <td class="emptycell" width="15%"></td>
                                    </tr>';
                    
                    $html.='
                                    <tr>
                                        <td width="15%" class="emptycell"></td>
                                        <td width="15%" class="emptycell"></td>
                                        <td width="15%" class="emptycell"></td>
                                        <td width="15%" class="emptycell"></td>
                                        <td class="emptycell" width="10%"></td>
                                        <td class="emptycell" align="left" width="15%">Wartość</td>
                                        <td class="emptycell" width="15%"><span style="font-weight:bold">'.number_format($totalBrutto, 2, ',', ' ').' PLN</span></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            
                            <div style="text-align: right;">
                                Słownie
                                <br />
                                '.$this->Money->kwotaslownie(round($totalBrutto, 2)).'
                            </div>
                            
                            <div style="text-align: left;">
                            <br><br>
                                Sposób zapłaty: przelew
                                <br />
                                Termin zapłaty: '.$deadline.'
                                <br />
                                Nr rachunku bankowego: do uzupełnienia
                            </div>
                        
                        </body>
                        </html>
                        ';
                        //==============================================================
                        //==============================================================
                
                $mpdf = new mPDF('utf-8','A4','','',15,15,58,25,10,10); 
                //$mpdf->SetProtection(array('print', 'modify'));
                $mpdf->SetTitle("ContentPro");
                $mpdf->SetAuthor("ContentPro");
                $mpdf->SetDisplayMode('fullpage');
                $mpdf->WriteHTML($html);
                
                $invoiceUrl = $this->getInvoiceUrl($data);
                $mpdf->Output($invoiceUrl, 'F');
        
    }
	
}
    