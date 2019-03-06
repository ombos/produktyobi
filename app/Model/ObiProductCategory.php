<?php
App::uses('AppModel', 'Model');

class ObiProductCategory extends AppModel {
	
	public $actsAs = array('Containable');
	public $hasOne = array();
	public $hasMany = array();
	public $hasAndBelongsToMany = array();
	public $belongsTo = array('ObiCategory');
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array();
		
	}
	
}
