<?php
App::uses('Component', 'Controller');
App::uses('UserRoleAssociation', 'Model');

class AuthorizeComponent extends Component {
    
	protected $userRoleAssociation;
	
	public function __construct() {
		
		$this->UserRoleAssociation = new UserRoleAssociation();
		
	}
	
	public function isAllowed($userId, $allowedRolesIds) {
		
		return count(array_intersect($allowedRolesIds, $this->getRoles($userId))) > 0;
		
	}
	
	public function getRoles($userId) {
		
		if ($userId) {
			
			$userRolesIds = $this->UserRoleAssociation->find('list', array(
				'recursive' => -1,
				'conditions' => array(
					'user_id' => $userId
				),
				'fields' => array(
					'UserRoleAssociation.user_role_id'
				),
                'group' => array(
                    'UserRoleAssociation.user_role_id'
                )
			));

			return $userRolesIds;
			
		}
		
	}
	
}
    