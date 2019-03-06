<?php
App::uses('AppModel', 'Model');
App::uses('OrderVariant', 'Model');

class SystemOrderElement extends AppModel {
	
	public $actsAs = array(
		'Rds.RdsTree'
	);
	
	public $OrderVariant;
	
	public function __construct() {
		
		$this->OrderVariant = new OrderVariant();
		
		parent::__construct();
		$this->validationSets = array(
			array(),
			'add' => array(
				'name' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nie wpisano nazwy elementu')
					)
				)
			),
			'edit' => array(
				'name' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nie wpisano nazwy elementu')
					)
				)
			)
		);
		
	}
	
	public function getOrderVariant($systemOrderElementId) {
		
		if ($systemOrderElementId) {
			
			$orderVariant = $this->OrderVariant->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'system_order_element_id' => $systemOrderElementId
				),
				'fields' => array(
					'id'
				)
			));
			
			if ($orderVariant) {
				return $orderVariant['OrderVariant']['id'];
			} else {
				return NULL;
			}
			
		} else return NULL;
		
	}
	
}
