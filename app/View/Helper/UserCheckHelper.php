<?php
App::uses('AppHelper', 'View/Helper');
App::uses('User', 'Model');

class UserCheckHelper extends AppHelper {
	
	protected $User;
	
	public function __construct(View $View, $settings = array()) {
		
		$this->User = new User();
		
	}
	
}
