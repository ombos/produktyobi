<?php
App::uses('AppController', 'Controller');

class TemplatesController extends AppController {
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Auth->allow('get');
		
	}
	
	public function get($name) {
		
		$this->layout = false;
		$this->render($name);
		$this->_returnRdsResponse = false;
		
	}
	
}
