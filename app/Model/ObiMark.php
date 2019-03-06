<?php
App::uses('AppModel', 'Model');

class ObiMark extends AppModel {
	
	public $actsAs = array('Containable');
	
	public $hasOne = array();
	public $hasMany = array();
	public $hasAndBelongsToMany = array();
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array(),
			'add' => array(
				'name' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Wpisz nazwę marki')
					)
				)
			),
			'edit' => array(
				'name' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Wpisz nazwę marki')
					)
				)
			),
		);
		
	}
	
}
