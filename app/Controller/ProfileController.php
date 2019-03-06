<?php
App::uses('AppController', 'Controller');

class ProfileController extends AppController {
	
	public $uses = array(
		'User',
		'Company'
	);
	
	public function index() {
		
		//$user = $this->Auth->user();
		//$this->set(compact('user'));
		
	}
	/*
	public function user() {
		
		if ($this->request->is('post')) {
			$this->User->useValidationSet('edit_profile');
			$result = $this->RdsValidation->validate($this->User, $this->request->data);
			
			if ($result === true) {
				if ($this->User->saveAssociated($this->request->data, array('deep' => true))) {
					$this->refreshUser();
					$this->rdsResponse->message = __('Data has been saved successfully.');
				} else $this->rdsResponse->errors = $this->Architect->messages['save_error'];
			} else $this->rdsResponse->errors = $result;
		} else {
			$this->User->recursive = -1;
			$this->request->data = $this->User->findById($this->Auth->user('id'));
		}
		
	}
	
	public function validate_user() {
		
		$this->User->useValidationSet('edit_profile');
		$this->rdsResponse->data = $this->RdsValidation->validate($this->User, $this->request->data['data']);
		
	}
*/	
	public function change_password() {
		
		if ($this->request->is('post')) {
			$this->User->useValidationSet('change_password');
			$result = $this->RdsValidation->validate($this->User, $this->request->data);
			
			if ($result === true) {
				$this->User->validate = null;
				
				if ($this->User->save(array(
					'id' => AuthComponent::user('id'),
					'password' => $this->Auth->password($this->request->data['User']['new_password']),
					'hash' => $this->User->generateHash($this->Auth->user('email')),
					'force_pass_change' => 0
				))) {
					$this->refreshUser();
					//$this->Email->sendProfileChangePassword($this->Auth->user('id'));
					$this->Session->setFlash(__('Twoje hasło zostało zmienione !'), 'default', array('type' => 'success'));
					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'pages', 'action' => 'dashboard'))
					);
				} else $this->rdsResponse->errors = $this->User->messages['save_error'];
			} else $this->rdsResponse->errors = $result;
		}
		
	}
/*	
	public function change_password_sent() {}
	
	public function change_password_confirm($hash) {
		
		$this->User->recursive = -1;
		$user = $this->User->findByHash($hash);
		
		if ($user && $user['User']['new_password'] && $this->User->save(array(
			'id' => $user['User']['id'],
			'password' => $user['User']['new_password'],
			'new_password' => null,
			'hash' => null
		))) {
			$message = __('Your password has been changed successfully.');
			$success = true;
		} else {
			$message = __('This is not a valid link.');
			$success = false;
		}
		
		$this->set(compact('message', 'success'));
		
	}*/
	
}
