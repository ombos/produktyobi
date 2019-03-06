<?php
App::uses('AppModel', 'Model');

class CronEventContent extends AppModel {
	
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
