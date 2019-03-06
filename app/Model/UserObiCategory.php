<?php
App::uses('AppModel', 'Model');

class UserObiCategory extends AppModel {
	
	public $actsAs = array('Containable');
	
	public $hasMany = array();
	public $belongsTo = array(
		'ObiCategory',
		'User'
	);
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array(),
		);
		
	}
	
}
