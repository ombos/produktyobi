<?php 
	App::uses('AppController', 'Controller');

	Class NotificationInfoBlogerOfferAccepted extends AppController {
		
		public $uses = array(
			'Order',
			'OrderResponse'
		);
		
		public function _toTemplate($json = null) {
			
			$text = '';
			$text = '<div>';
			
			if (!empty($json)) {
				
				$decoded = json_decode($json);

				$jsonModel = $decoded->elementModel;
				$element = $this->$jsonModel->find('first', array(
					'recursive' => 0,
					'conditions' => array(
						'OrderResponse.id' => $decoded->elementID
					)
				));
				//debug($element);
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
				
				if ($element) {
					
					$text.= '<div>- '.$element['Order']['title'].' - Zamówienie:  '.$element['Order']['order_number'].' (Bloger: '.$element['User']['name'].')</div>';
					
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>