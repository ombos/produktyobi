<?php
App::uses('AppModel', 'Model');

class ObiProductData extends AppModel {
	
	public $actsAs = array('Containable');
	
	public $hasOne = array(
	);
	public $hasMany = array(
		
	);
	public $hasAndBelongsToMany = array();
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array();
		
	}
	
}
