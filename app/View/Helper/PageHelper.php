<?php
App::uses('AppHelper', 'View/Helper');
App::uses('User', 'Model');
App::uses('UserRoleAssociation', 'Model');

class PageHelper extends AppHelper {
	
	protected $User;
	protected $UserRoleAssociation;
	
	public function __construct(View $View, $settings = array()) {
		
		$this->User = new User();
		$this->UserRoleAssociation = new UserRoleAssociation();
		
	}
	
}
