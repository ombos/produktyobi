<?php
App::uses('Component', 'Controller');
App::uses('Bill', 'Model');
App::uses('Payment', 'Model');
App::uses('User', 'Model');
App::uses('Project', 'Model');


class PaymentHandlerComponent extends Component {
    
    public $components = array('Rds.RdsValidation');
    
    protected $Payment;
	protected $User;
	protected $Project;
	
	public function initialize(Controller $controller) {
	    
        $this->Payment = new Payment();
        $this->User = new User();
		$this->Project = new Project();
        
	}
	
	public function _updateUserPayments($userID, $amount, $operator) {
		
		if ($userID && isset($amount) && $operator) {
			
			$user = $this->User->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'id' => $userID
				), 
				'fields' => array(
					'cash_amount'
				)
			));
			
			if ($user) {
				
				if ($operator == '-') {
					$newAmount = $user['User']['cash_amount'] - $amount;
				} else if ($operator == '+') {
					$newAmount = $user['User']['cash_amount'] + $amount;
				}
				
				if ($this->User->save(array(
					'id' => $userID,
					'cash_amount' => $newAmount
				))) {
					return TRUE;
				} else return FALSE;
				
				
				
			} else {
				$this->_throw404();
			}
			
			
		} else {
			$this->_throw404();
		}
		
	}
	
	public function getUserCash($userID) {
		
		if ($userID) {
			
			$user = $this->User->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'id' => $userID
				),
				'fields' => array(
					'cash_amount'
				)
			));
			
			if ($user) {
				return $user['User']['cash_amount'];
			} else return FALSE;
			
		}
		
	}
	
	public function getAccountManagerId($projectId) {
		
		if ($projectId) {
			$project = $this->Project->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'id' => $projectId
				),
				'fields' => array(
					'account_manager_id'
				)
			));
			
			return $project['Project']['account_manager_id'];
			
		}
		
	}
	
    /*
    public function add($data) {
        
        $result = array(
            'data' => null,
            'errors' => null,
        );
        
        $this->Bill->useValidationSet('add');
        $validationResult = $this->RdsValidation->validate($this->Bill, $data);

        if ($validationResult === true) {
            $data['Bill']['number'] = $this->generateBillNumber();
            $folder = $this->getBillFolder($data);
            
            if (!file_exists($folder)) {
                mkdir($folder, 0777, true);
            }
            
            $data['Bill']['generation_type'] = 'manual';

            if ($this->Bill->save($data)) {
                $billId = $this->Bill->getLastInsertID();
                foreach ($data['BillElement']['element_name'] as $key => $value) {
                    $this->BillElement->useValidationSet('add');
                    $resultElement = $this->RdsValidation->validate($this->BillElement, $data);

                    if ($resultElement === true) {
                        $elementData['bill_id'] = $billId;
                        $elementData['price_brutto'] = $data['BillElement']['price_brutto'][$key];
                        $elementData['element_name'] = $value;
                        $this->BillElement->create();
                        $this->BillElement->save($elementData);
                    }
                }
                $this->generateBill($data);
                $result['data'] = array(
                    'redirect' => Router::url(array('controller' => 'invoices', 'action' => 'index_bills'))
                );
            } else $result['errors'] = $this->Bill->messages['save_error'];
            
        } else $result['errors'] = $validationResult;
        
        
        return $result;
        
    }
    
    public function generateBillNumber() {
        
        $bills = $this->Bill->find('all', array(
            'conditions' => array(
                'created >=' => date("Y-m")."-01"
            )
        ));
        
        $count = count($bills) + 1;
        
        $number = $count."/".date("m")."/".date("Y");
        
        return $number;
        
    }
    
    public function numberToFilename($billNumber) {

        $billName = str_replace(array('/', '.', '\\', ','), '_', $billNumber);
        return 'rachunek'.$billName.'.pdf';
        
    }
    
    public function getBillFilename($bill) {
        
        $billFilename = $this->numberToFilename($bill['Bill']['number']);
        return $billFilename;
        
    }
    
    public function getBillFolder($bill) {
        
        $folderName = substr(md5($bill['Bill']['number']), 0, 12);
        return 'files/bills/'.$folderName;
        
    }
    
    public function getBillUrl($bill) {
        
        $billFilename = $this->getBillFilename($bill);
        $folderUrl = $this->getBillFolder($bill);
        return $folderUrl.'/'.$billFilename;
        
    }
    
    public function generateBill($data) {
        
        require_once '../Lib/mpdf/mpdf.php';
        
        $daysMore = 14;
        $deadline = date("Y-m-d", strtotime(date("Y-m-d")) + $daysMore * 86400);
        
        $BillType = 'Rachunek';
        
        $view = new View();
        $view->set('data', $data);
        $view->layout = false;
        $html = $view->render('invoices/bill_template');
                
        $mpdf = new mPDF('utf-8','A4','','',15,15,38,25,10,10); 
        //$mpdf->SetProtection(array('print', 'modify'));
        $mpdf->SetTitle("ContentPro");
        $mpdf->SetAuthor("ContentPro");
        $mpdf->SetDisplayMode('fullpage');
        $mpdf->WriteHTML($html);
        
        $BillUrl = $this->getBillUrl($data);
        $mpdf->Output($BillUrl, 'F');
        
    }*/
	
}
    