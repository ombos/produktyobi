<?php 
	App::uses('AppController', 'Controller');
	
	Class NotificationInfoRegister extends AppController {
		
		public $uses = array(
			'User'
		);
		
		public function _toTemplate($json = null) {
			
			$text = '';
			$text .= '<div>';
			
			if (!empty($json)) {
				
				$decoded = json_decode($json);
				$user = $this->User->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'id' => $decoded->simpleUserID
					)
				));
				
				if ($user) {
					$text.= '<div>- '.$user['User']['email'].' (Godzina rejestracji: '.$user['User']['created'].')</div>';
				}
				
			}
			
			$text.= '</div>';
			return $text;
			
		}
		
	}
?>