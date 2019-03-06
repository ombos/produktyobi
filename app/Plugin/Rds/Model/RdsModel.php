<?php
App::uses('Model', 'Model');

class RdsModel extends Model {
	
	public $validationSets;
	
	public function useValidationSet($name) {
		
		$this->validate = $this->validationSets[$name];
		
	}
	
	public function beforeValidate($options = array()) {
		
		if (!is_array($this->validate) && $this->validationSets) {
			$this->useValidationSet(key($this->validationSets));
		}
		
	}
	
	public function equalToField($check, $field) {
		
		return $check[key($check)] == $this->data[$this->name][$field];
		
	}
	
	public function isNotUnique($check) {
		
		return !$this->isUnique($check);
		
	}
	
	public function xFile($check, $options) {
		
		$arr = $check[key($check)];
		if (is_array($arr)) {
			$add = isset($arr['add']) && is_array($arr['add']) ? count($arr['add']) : 0;
			$skip = isset($arr['skip']) && is_array($arr['skip']) ? count($arr['skip']) : 0;
			return $options['allowEmpty'] ? true : $add + $skip > 0;
		}
		return false;
		
	}
    
    public function truncate() {
        
        $this->query('TRUNCATE TABLE '.$this->table);
        
    }
	
}
