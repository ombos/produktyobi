<?php 
	App::uses('AppController', 'Controller');

	Class NotificationInfoTextToEdit extends AppController {
		
		public $uses = array(
			'Order',
			'OrderArticle'
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
						'id' => $decoded->elementID
					)
				));
				
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
					
					$text.= '<div>- '.$element['OrderArticle']['title'].' (Zamówienie: '.$order['Order']['order_number'].')</div>';
					
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>