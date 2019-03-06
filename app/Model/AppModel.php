<?php
App::uses('RdsModel', 'Rds.Model');

class AppModel extends RdsModel {
	
	public $recursive = -1;
	public $validationDomain = 'validation_errors';
	public $messages = array();
	
	public function __construct() {
		
		parent::__construct();
		$this->messages['save_error'] = $this->messages['delete_error'] = __('An error has occurred. Please, try again');
		
	}
	
	public function isUniqueAcrossArchitect($check) {
		
		return !$this->find('count', array(
			'recursive' => -1,
			'conditions' => array(
				'id !=' => isset($this->data[$this->name]['id']) ? $this->data[$this->name]['id'] : null,
				'architect_id' => isset($this->data[$this->name]['architect_id']) ? $this->data[$this->name]['architect_id'] : AuthComponent::user('architect_id'),
				key($check) => $check[key($check)]
			)
		));
		
	}
	
	public function unbindAssociations() {
		
		foreach ($this->getAssociated() as $model => $type) {
			$this->unbindModel(array(
				$type => array($model)
			));
		}
		
	}
	
}
