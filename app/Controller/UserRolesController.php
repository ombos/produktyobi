<?php
App::uses('AppController', 'Controller');

class UserRolesController extends AppController {
	
	public $uses = array(
		'UserRole',
		'UserRoleAssociation',
		'UserRoleDetail'
	);
	public $components = array(
		'Ctrl'
	);
	public $utilities = array(
		'Inflector'
	);
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'edit',
			'activeRole'
		);
		
	}
	
	public function activeRole() {
        
		$user = $this->UserRoleAssociation->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'UserRoleAssociation.id' => $this->request->data['id']
			)
		));
		
		if ($user && $this->UserRoleAssociation->save(array(
			'id' => $this->request->data['id'],
			'active' => $this->request->data['active']
		))) $this->rdsResponse->data = true;
		else $this->rdsResponse->errors = $this->UserRoleAssociation->messages['save_error'];
		
	}
	
	public function filter_index() {
		
		$userRoles = $this->UserRole->find('all', array(
			'recursive' => -1,
		));
		
		$roles = array();
		foreach ($userRoles as $value) {
			$value['UserRole']['view_url'] = Router::url(array(
				'controller' => 'user_roles',
				'action' => 'edit',
				$value['UserRole']['id']
			));
			$roles[] = $value;
		}
		
		$this->rdsResponse->data['items']  = $roles;
		
	}
	
	public function index() {}
	
	public function edit($id) {
		
		if ($id) {
			
			$details = $this->UserRoleDetail->find('all', array(
				'recursive' => -1,
				'conditions' => array(
					'UserRoleDetail.user_role_id' => $id,
				)
			));
			
			if ($this->request->is('post')) {	
				$this->UserRoleDetail->deleteAll(array('user_role_id' => $id));
				
				foreach ($this->request->data['UserRoleDetail']['details'] as $value) {
					$exp = explode("@", $value);
					$this->UserRoleDetail->create();
					$this->UserRoleDetail->save(array(
						'user_role_id' => $id,
						'controller' => $exp[0],
						'action' => $exp[1]
					));		
				}
				
				$this->Session->setFlash(__('Uprawnienia zostały zaktualizowane !'), 'default', array('type' => 'success'));
				$this->rdsResponse->data = array(
					'redirect' => Router::url(array('controller' => 'user_roles', 'action' => 'index'))
				);
				
			} else {
				$roleDetails = $this->UserRole->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'UserRole.id' => $id
					)
				));
				
				$ctrlList = $this->_ctrlList();
				$rolesArray = array();
				
				foreach ($ctrlList as $key => $value) {
					$controllerKey = str_replace("_controllers", "", Inflector::tableize($key));
					foreach($value as $k1 => $v1) {
						$uniwersal = $controllerKey.'@'.$v1;
						$rolesArray[$uniwersal] = $controllerKey.' => '.$v1;
					}
				}
				
				$rolesSelected = array();
				
				foreach ($details as $key => $value) {
					$rolesSelected[] = $value['UserRoleDetail']['controller'].'@'.$value['UserRoleDetail']['action'];
				}
				
				$this->set(compact('rolesArray', 'roleDetails', 'rolesSelected'));
			}
			
		} else $this->_throw_404();
		
	}
	
	public function _ctrlList() {
		
		$aControllers = $this->Ctrl->get();
		return $aControllers;
		
	}
	
}
