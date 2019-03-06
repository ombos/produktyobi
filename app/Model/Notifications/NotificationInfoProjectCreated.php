<?php 
	App::uses('AppController', 'Controller');

	Class NotificationInfoProjectCreated extends AppController {
		
		public $uses = array(
			'Project'
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
						'id' => $decoded->projectID
					)
				));
				
				if ($element) {
					
					$text.= '<div>- '.$element['Project']['name'].' (Utworzono: '.$element['Project']['created'].')</div>';
					
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>