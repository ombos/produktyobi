<?php
App::uses('AppModel', 'Model');

class ObiCategory extends AppModel {
	
	public $actsAs = array('Containable');
	public $hasOne = array();
	public $hasMany = array(
		'ObiCategoryData'
	);
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
						'message' => __('Nie podano nazwy kategorii')
					),
				),
			),
		);
		
	}
	
}
