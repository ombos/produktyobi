<?php 
	App::uses('AppController', 'Controller');

	Class NotificationProductExport extends AppController {
		
		public $uses = array(
			'User'
		);
		
		public function _toTemplate($json = null) {
			
			$text = '';
			$text = '<div>';
			
			if (!empty($json)) {
				
				$decoded = json_decode($json);

				$jsonModel = $decoded->elementModel;
				
				//--- pobieranie numeru zamówienia
				$order = $this->Order->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'id' => $decoded->orderID
					),
					'fields' => array(
						'order_number'
					)
				));
				
				if ($order) {
					
					$text.= '<div>- (Zamówienie: '.$order['Order']['order_number'].')</div>';
					
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
		
	}
?>