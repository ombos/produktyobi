<?php
App::uses('AppModel', 'Model');

class ObiProduct extends AppModel {
	
	public $actsAs = array('Containable');
	public $belongsTo = array(
	);
	public $hasOne = array(
		'ObiProductDataBasics',
		'ObiProductDataLogistics',
		'ObiProductCategory',
		'ObiProductDataKartons'
	);
	public $hasMany = array(
		'ObiProductData',
		'ObiProductMedia',
		'ObiProductDataPalets'
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
						'message' => __('Nie podano nazwy produktu')
					),
				),
				'description' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nie wpisano opisu produktu')
					),
				),
			),
		);
		
	}
	
}
