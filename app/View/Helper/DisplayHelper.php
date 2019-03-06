<?php
App::uses('AppHelper', 'View/Helper');
App::uses('UserRoleAssociation', 'Model');

class DisplayHelper extends AppHelper {
	
	protected $User;
	
	public $helpers = array(
		'Html'
	);
	
	public function __construct(View $View, $settings = array()) {
		
		$this->UserRoleAssociation = new UserRoleAssociation();
		
	}
	
	public function displayRoles($userId) {
		
		if ($userId) {
			
			$userRoles = $this->UserRoleAssociation->find('list', array(
				'recursive' => 0,
				'conditions' => array(
					'user_id' => $userId
				),
				'fields' => array(
					'UserRole.name'
				)
			));

			return implode(' + ', $userRoles);
			
		}
		
	}
	
	public function currentAction($targetController, $targetAction = NULL) {
		
		$controller = $this->params['controller'];
		$action = $this->params['action'];
		
		if ($targetAction != NULL) {
			if (($targetController == $controller) && ($targetAction == $action)) {
				return " active ";
			}
		} else {
			if ($targetController == $controller) {
				return " active ";
			}
		}
		return NULL;
		
	}
	
}
