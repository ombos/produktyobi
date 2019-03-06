<?php
App::uses('AppModel', 'Model');

class UserRoleAssociation extends AppModel {
	
	public $actsAs = array('Containable');
	
	public $hasMany = array();
	public $belongsTo = array(
		'UserRole',
		'User'
	);
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array(),
			'public_register' => array(
				'user_role_id' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nie wybrano roli użytkownika')
					),
				),
			),
		);
		
	}
	
}
