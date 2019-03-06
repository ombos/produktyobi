<?php 
	App::uses('AppController', 'Controller');

	Class NotificationUserRegister extends AppController {
		
		public $uses = array(
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
						'id' => $decoded->projectID
					)
				));
				
				$user = $this->User->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'id' => $decoded->simpleUserID
					),
				));
				
				if ($element) {
					
					$text.= '<div>- '.$element['Project']['name'].' - Account manager:  '.$user['User']['name'].'</div>';
					
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>