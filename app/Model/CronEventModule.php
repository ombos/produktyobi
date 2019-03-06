<?php
App::uses('AppModel', 'Model');

class CronEventModule extends AppModel {
	
	public $belongsTo = array(
		'CronEvent'
	);
	public $hasOne = array();
	public $hasMany = array();
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array()
		);
		
	}
	
}
