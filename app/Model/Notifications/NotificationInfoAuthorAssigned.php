<?php
	App::uses('AppController', 'Controller');
 
	Class NotificationInfoAuthorAssigned extends AppController {
		
		public $uses = array(
			'Order'
		);
		
		public function _toTemplate($json = null) {
			
			$text = '';
			$text = '<div>';
			
			if (!empty($json)) {
				
				$decoded = json_decode($json);

				$jsonModel = $decoded->elementModel;
				$element = $this->$jsonModel->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'id' => $decoded->orderID
					)
				));
				
				if ($element) {
					
					$text.= '<div>- '.$element['Order']['order_number'].'</div>';
					
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>