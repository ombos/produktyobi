<?php
App::uses('AppController', 'Controller');

class AccessAccountsController extends AppController {
	
	public $uses = array(
		'AccessAccount'
	);
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'delete',
			'active'
		);
		
	}
	
	public function index() {
		
		if ($this->request->is('post')) {
			$this->AccessAccount->useValidationSet('edit');
			$result = $this->RdsValidation->validate($this->AccessAccount, $this->request->data);
			
			if ($result === true) {
				$accessAccount = $this->AccessAccount->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'AccessAccount.id' => $this->request->data['AccessAccount']['id'],
						'AccessAccount.architect_id' => $this->Auth->user('Architect.id')
					)
				));
				
				if ($accessAccount && $this->AccessAccount->save($this->request->data)) {
					$this->rdsResponse->data = $this->AccessAccount->find('first', array(
						'recursive' => -1,
						'fields' => array(
							'AccessAccount.id', 'AccessAccount.login', 'AccessAccount.password', 'AccessAccount.active'
						),
						'conditions' => array(
							'AccessAccount.id' => $this->request->data['AccessAccount']['id']
						)
					));
					$this->rdsResponse->message = __('Data has been saved successfully.');
				} else $this->rdsResponse->errors = $this->AccessAccount->messages['save_error'];
			} else $this->rdsResponse->errors = $result;
		}
		
	}
	
	public function filter_index() {
		
		$this->rdsResponse->data['items'] = $this->AccessAccount->find('all', array(
			'recursive' => -1,
			'fields' => array(
				'AccessAccount.id', 'AccessAccount.login', 'AccessAccount.password', 'AccessAccount.active'
			),
			'conditions' => array(
				'AccessAccount.architect_id' => $this->Auth->user('Architect.id')
			),
			'order' => array(
				'AccessAccount.active DESC',
				'AccessAccount.login ASC'
			)
		));
		
	}
	
	public function add() {
		
		if ($this->request->is('post')) {
			$this->AccessAccount->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->AccessAccount, $this->request->data);
			
			if ($result === true) {
				$data = $this->request->data;
				$data['AccessAccount']['architect_id'] = $this->Auth->user('Architect.id');
				$data['AccessAccount']['active'] = true;
				
				if ($this->AccessAccount->save($data)) {
					$this->Session->setFlash(__('Access account has been added successfully.'), 'default', array('type' => 'success'));
					
					$this->rdsResponse->data = array(
	                    'redirect' => Router::url(array('controller' => 'access_accounts', 'action' => 'index'))
	                );
				} else $this->rdsResponse->errors = $this->AccessAccount->messages['save_error'];
			} else $this->rdsResponse->errors = $result;
		}
		
	}
	
	public function delete() {
		
		$id = $this->request->data;
		$accessAccount = $this->AccessAccount->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'AccessAccount.id' => $id,
				'AccessAccount.architect_id' => $this->Auth->user('Architect.id')
			)
		));
		
		if ($accessAccount && $this->AccessAccount->delete($id)) $this->rdsResponse->data = true;
		else $this->rdsResponse->errors = $this->AccessAccount->messages['delete_error'];
		
	}
	
	public function active() {
		
		$accessAccount = $this->AccessAccount->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'AccessAccount.id' => $this->request->data['AccessAccount']['id'],
				'AccessAccount.architect_id' => $this->Auth->user('Architect.id')
			)
		));
		
		if ($accessAccount && $this->AccessAccount->save(array(
			'id' => $this->request->data['AccessAccount']['id'],
			'active' => $this->request->data['AccessAccount']['active']
		))) $this->rdsResponse->data = true;
		else $this->rdsResponse->errors = $this->AccessAccount->messages['save_error'];
		
	}
	
}
