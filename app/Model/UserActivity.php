<?php
App::uses('AppModel', 'Model');

class UserActivity extends AppModel {

	public $actsAs = array('Containable');
	public $belongsTo = array(
		'User',
		'ObiProduct'
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
