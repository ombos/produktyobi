<?php 
	App::uses('AppController', 'Controller');

	Class NotificationInfoPublisherOrderCreated extends AppController {
		
		public $uses = array(
			'Order',
		);
		
		public function _toTemplate($json = null) {
			
			$text = '';
			$text = '<div>';
			
			if (!empty($json)) {
				
				$decoded = json_decode($json);

				$jsonModel = $decoded->elementModel;
				/*$element = $this->$jsonModel->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'OrderResponse.id' => $decoded->elementID
					)
				));*/
				//debug($element);
				//--- pobieranie numeru zamówienia
				$order = $this->Order->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'id' => $decoded->orderID
					),
				));
	
				$text.= '<div>- Zamówienie:  '.$order['Order']['order_number'].' (Utworzono: '.$order['Order']['created'].')</div>';
					
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>