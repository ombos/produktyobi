<?php
App::uses('AppModel', 'Model');
App::uses('Project', 'Model');

class UserLog extends AppModel {
	
	public $actsAs = array('Containable');
	public $belongsTo = array(
		'User'
	);
	public $hasOne = array();
	public $hasMany = array();
	public $hasAndBelongsToMany = array();
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array(),
		);
		
	}
	
}
