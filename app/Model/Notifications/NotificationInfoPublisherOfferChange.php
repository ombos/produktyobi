<?php 
	App::uses('AppController', 'Controller');

	Class NotificationInfoPublisherOfferChange extends AppController {
		
		public $uses = array(
			'PublisherWebsite',
			'PublisherWebsiteOffer'
		);
		
		public function _toTemplate($json = null) {
			
			$text = '';
			$text = '<div>';
			
			if (!empty($json)) {
				
				$decoded = json_decode($json);
				//debug($decoded);
				//exit;
				$jsonModel = $decoded->elementModel;
				$element = $this->$jsonModel->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'id' => $decoded->elementID
					)
				));
				
				if ($element) {
					
					$text.= '<div>- '.$element['PublisherWebsite']['title'].' (Ostatnio: '.$element['PublisherWebsite']['modified'].')</div>';
					
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>