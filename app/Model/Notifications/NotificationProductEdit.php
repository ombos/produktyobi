<?php 
	App::uses('AppController', 'Controller');

	Class NotificationProductEdit extends AppController {
		
		public $uses = array(
			'ObiProduct',
			'User'
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
				
				$text.= '<div>- '.$element[$jsonModel]['name'].'</div>';
				
			}

			$text.= '</div>';
			return $text;
			
		}
		
	}
?>