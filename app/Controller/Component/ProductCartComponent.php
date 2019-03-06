<?php
App::uses('Component', 'Controller');

class ProductCartComponent extends Component {
    
	public function initialize(Controller $controller) {
	    
	}
    
    public function add($data) {
        
        $result = array(
            'data' => null,
            'errors' => null,
        );
		
		$this->generateCart($data);
		
        return $result;
        
    }
    
	public function numberToFilename($billNumber) {

        $billName = str_replace(array('/', '.', '\\', ','), '_', $billNumber);
        return 'produkt-'.$billName.'.pdf';
        
    }
	
	public function getBillFilename($bill) {
        
        $billFilename = $this->numberToFilename(111);
        return $billFilename;
        
    }
    
    public function getBillFolder($bill) {
        
        $folderName = substr(md5(111), 0, 12);
		$fullpath = $_SERVER['DOCUMENT_ROOT'].'/app/webroot/files/pdf/';
		
        return $fullpath;
        
    }
    
    public function getBillUrl($bill) {
 
        $billFilename = $this->getBillFilename($bill);
        $folderUrl = $this->getBillFolder($bill);
        return $folderUrl.'/'.$billFilename;
        
    }
	
    public function generateCart($data) {

		/*debug($data);
	
		exit;
	*/
        require_once '../Lib/mpdf/mpdf.php';

        $view = new View();
        $view->set('data', $data);
        $view->layout = false;
        $html = $view->render('Templates/product_cart_template');
                
        $mpdf = new mPDF('utf-8','A4','','',15,15,38,25,10,10); 
        //$mpdf->SetProtection(array('print', 'modify'));
        $mpdf->SetTitle("PRODUKTYOBI.PL");
        $mpdf->SetAuthor("PRODUKTYOBI.PL");
        $mpdf->SetDisplayMode('fullpage');
        $mpdf->WriteHTML($html);
        
        $BillUrl = $this->getBillUrl($data);
		
        $mpdf->Output('Produkt-'.$data['product']['ObiProduct']['id'].'.pdf', 'D');
        
    }
	
}
    