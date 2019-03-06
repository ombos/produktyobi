<?php
App::uses('AppModel', 'Model');

class ConnOrder extends AppModel {
	
	public $belongsTo = array(
		
	);
	public $hasOne = array(

	);
	public $hasMany = array(
		
	);
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array()
		);
		
	}
	
}
