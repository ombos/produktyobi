<?php
App::uses('AppController', 'Controller');

class SystemPricesController extends AppController {
	
	public $uses = array(
		'SystemPrice'
	);
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions();
		
	}
	
	public function index() {}
	
	public function filter_index() {
		
		$prices = $this->SystemPrice->find('all', array(
			'recursive' => -1,
		));
		
		$this->rdsResponse->data['items'] = $prices;
		
	}
	
	public function edit($elementID) {
		
		if ($elementID) {
			
			if ($this->request->is('post')) {
				$this->SystemPrice->useValidationSet('edit');
				$result = $this->RdsValidation->validate($this->SystemPrice, $this->request->data);
				
				if ($result === true) {
					if ($this->SystemPrice->save($this->request->data)) {
						$this->rdsResponse->message = __('Element marży został zaktualizowany');
					} else $this->rdsResponse->errors = $this->SystemPrice->messages['save_error'];
				} else $this->rdsResponse->errors = $result;
			}
			
			
			$element = $this->SystemPrice->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'id' => $elementID
				)
			));
			
			$this->request->data = $element;
			
		} else $this->_throw404();
		
	}
	
}
