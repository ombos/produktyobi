<?php
App::uses('AppModel', 'Model');

class ObiCategoryData extends AppModel {
	
	public $actsAs = array('Containable');
	public $belongsTo = array(
		'ObiCategory'
	);
	public $hasOne = array();
	public $hasMany = array();
	public $hasAndBelongsToMany = array();
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array();
		
	}
	
}
