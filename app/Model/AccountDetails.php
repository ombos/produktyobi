<?php
App::uses('AppModel', 'Model');

class AccountDetails extends AppModel {
	
	public $belongsTo = array(
	);
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array(),
			'add' => array(
				'user_id' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => 'ID użytkownika nie może być puste'
					),
				),
			),
			'edit' => array(
				'user_id' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => 'ID użytkownika nie może być puste'
					),
				),
			)
		);
		
	}
	
}
