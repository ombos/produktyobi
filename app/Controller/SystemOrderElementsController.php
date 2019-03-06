<?php
App::uses('AppController', 'Controller');

class SystemOrderElementsController extends AppController {
	
	public $uses = array(
		'SystemOrderElement'
	);
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'tree',
			'get_element_children'
		);
		
	}
	
	public function add() {
		
		if ($this->request->is('post')) {
			$this->SystemOrderElement->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->SystemOrderElement, $this->request->data);
			
			if ($result === true) {
				$data = $this->request->data;
				$data['SystemOrderElement']['parent_id'] = 1;
				if ($this->SystemOrderElement->save($data)) {
					$this->Session->setFlash(__('Nowy typ zamówienia został utworzony'), 'default', array('type' => 'success'));
					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'system_order_elements', 'action' => 'index'))
					);
				} else {
					$this->rdsResponse->errors = $this->Project->messages['save_error'];
				}
			} else $this->rdsResponse->errors = $result;
		}
		
	}
	
	public function edit($id) {
		
		$systemOrderElement = $this->SystemOrderElement->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'id' => $id
			)
		));
		
		if ($systemOrderElement) {
			if ($this->request->is('post')) {
				$this->SystemOrderElement->useValidationSet('edit');
				$result = $this->RdsValidation->validate($this->SystemOrderElement, $this->request->data);
				
				if ($result === true) {
					if ($this->SystemOrderElement->save($this->request->data)) { 
						$this->Session->setFlash(__('Nowy typ zamówienia został utworzony'), 'default', array('type' => 'success'));
						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'system_order_elements', 'action' => 'index'))
						);
					}
					else $this->rdsResponse->errors = $this->SystemOrderElement->messages['save_error'];
				} else $this->rdsResponse->errors = $result;
			} else {
				$this->request->data = $systemOrderElement;
			}
		} else $this->_throw404();
		
	}
	
	public function delete($id = null) {
		
		$this->SystemOrderElement->id = $id;
		if (!$this->SystemOrderElement->exists()) {
			throw new NotFoundException(__('Invalid page'));
		}
		if ($this->SystemOrderElement->delete()) {
			$this->Session->setFlash(__('Element został skasowany.'), 'default', array('type' => 'success'));
		} else {
			$this->Session->setFlash(__('Element nie został skasowany.'), 'default', array('type' => 'danger'));
		}
		return $this->redirect(array('action' => 'index'));
		
	}
	
	public function index() {}
	
	public function tree() {
		
		if ($this->request->is('post')) {
			$this->rdsResponse->errors = $this->SystemOrderElement->saveTree($this->request->data);
			if (!$this->rdsResponse->errors) $this->rdsResponse->message = 'Drzewo zostało zapisane.';
		}
		
		$this->rdsResponse->data = $tree = $this->SystemOrderElement->findTree();
		
	}
	
	public function get_element_children($id) {
		
		$children = $this->SystemOrderElement->find('all', array(
			'recursive' => -1,
			'conditions' => array(
				'parent_id' => $id
			),
			'fields' => array(
				'id', 'name'
			)
		));
		
		//sleep(0.5);
		
		if ($children) $this->rdsResponse->data = $children;
		
	}
	
}
