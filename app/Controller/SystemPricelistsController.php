<?php
App::uses('AppController', 'Controller');

class SystemPricelistsController extends AppController {
	
	public $uses = array(
		'SystemPricelist',
		'SystemPricelistCategory',
		'SystemPricelistElement',
		'SystemTopicType',
		'SystemOrderElement',
		'Project'
	);
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'edit', 
			'add',
			'delete'
		);
		$this->Auth->allow('get');
		
	}
	
	public function index() {}
	
	public function filter_index($projectID = null) {
		
		$items = array();
		$conditions = array();
		
		if ($projectID != null) $conditions['SystemPricelist.project_id'] = $projectID;
		
		$pricelists = $this->SystemPricelist->find('all', array(
			'recursive' => 0,
			'conditions' => $conditions
		));
		
		foreach ($pricelists as $value) {
			$value['edit_url'] = Router::url(array(
						'controller' => 'system_pricelists',
						'action' => 'edit',
						$value['SystemPricelist']['id']
					));
			$items[] = $value;
		}
		
		$this->rdsResponse->data['items'] = $items;
		
	}
	
	public function add() {
		
		if ($this->request->is('post')) {
				
				$data = $this->request->data;
				$this->SystemPricelist->useValidationSet('add');
				$this->SystemPricelistElement->useValidationSet('add');
				$result = $this->RdsValidation->validate($this->SystemPricelist, $data);
				
				if ($result === true) {
				
					if ($this->SystemPricelist->saveAssociated($data)) {
						
						$this->Session->setFlash(__('Cennik został utworzony !'), 'default', array('type' => 'success'));
						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'system_pricelists', 'action' => 'index'))
						);
		
					} else $this->rdsResponse->errors = $result;
					
				} else $this->rdsResponse->errors = $result;
				
		} else {
			
			$topics = $this->SystemTopicType->find('list', array(
				'recursive' => -1,
				'fields' => array('id', 'name')
			));
			
			$projects = $this->Project->find('list', array(
				'recursive' => -1,
				'fields' => array(
					'id', 'name'
				)
			));
			
			$orderTypes = $this->SystemOrderElement->find('list', array(
				'recursive' => -1,
				'conditions' => array(
					'parent_id' => 1
				),
				'fields' => array(
					'id', 'name'
				)
			));
			
			$this->set(compact('topics', 'projects', 'orderTypes'));
			
		}
		
	}
	
	public function edit($id) {
		
		if ($id) {
			
			if ($this->request->is('post')) {
				
				$data = $this->request->data;
				$this->SystemPricelist->useValidationSet('edit');
				$this->SystemPricelistElement->useValidationSet('edit');
				$result = $this->RdsValidation->validate($this->SystemPricelist, $data);
				
				$this->SystemPricelistCategory->deleteAll(array('system_pricelist_id' => $data['SystemPricelist']['id']));
				$this->SystemPricelistElement->deleteAll(array('system_pricelist_id' => $data['SystemPricelist']['id']));
				
				foreach ($data['SystemPricelistElement']['element_name'] as $key => $value) {
					$this->SystemPricelistElement->create();
					$this->SystemPricelistElement->save(array(
						'system_pricelist_id' => $id,
						'element_name' => $value,
						'element_price' => $data['SystemPricelistElement']['element_price'][$key]
					));
				}
				
				foreach ($data['SystemPricelistCategory'] as $key => $value) {
					
					if ($value['system_topic_type_id'] > 0) {
						$this->SystemPricelistCategory->create();
						$this->SystemPricelistCategory->save(array(
							'system_pricelist_id' => $id,
							'system_topic_type_id' => $value['system_topic_type_id']
						));
					}
					
				}
				$this->SystemPricelist->save($data);
				
				$this->Session->setFlash(__('Cennik został zaktualizowany !'), 'default', array('type' => 'success'));
				$this->rdsResponse->data = array(
					'redirect' => Router::url(array('controller' => 'system_pricelists', 'action' => 'index'))
				);
				
				
			} else {
				$pricelist = $this->SystemPricelist->find('first', array(
					'recursive' => -1,
					'conditions' => array(
						'SystemPricelist.id' => $id
					)
				));
				
				$topics = $this->SystemTopicType->find('list', array(
					'recursive' => -1,
					'fields' => array('id', 'name')
				));
				
				$selectedCategories = $this->SystemPricelistCategory->find('list', array(
					'recursive' => -1,
					'conditions' => array(
						'system_pricelist_id' => $id
					),
					'fields' => array(
						'system_topic_type_id'
					)
				));
				
				$elements = $this->SystemPricelistElement->find('all', array(
					'recursive' => -1,
					'conditions' => array(
						'system_pricelist_id' => $id
					)
				));
				
				$projects = $this->Project->find('list', array(
					'recursive' => -1,
					'fields' => array(
						'id', 'name'
					)
				));
				
				$orderTypes = $this->SystemOrderElement->find('list', array(
					'recursive' => -1,
					'conditions' => array(
						'parent_id' => 1
					),
					'fields' => array(
						'id', 'name'
					)
				));
				
				$this->request->data = $pricelist;
				$this->set(compact('topics', 'selectedCategories', 'elements', 'projects', 'orderTypes'));
				
			}
			
		} else $this->_throw404();
		
	}
	
	public function delete() {
		
		$id = $this->request->data;
		$pricelist = $this->SystemPricelist->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'SystemPricelist.id' => $id,
			)
		));
		
		if ($pricelist && $this->SystemPricelist->delete($id)) {
			$this->SystemPricelistElement->deleteAll(array('system_pricelist_id' => $id));
			$this->SystemPricelistCategory->deleteAll(array('system_pricelist_id' => $id));
			$this->rdsResponse->data = true;
		} 
		else $this->rdsResponse->errors = $this->User->messages['delete_error'];
		
	}
	
	public function validate_add() {
		
		if ($this->request->is('post')) {
				
			$data = $this->request->data['data'];
			
			$this->SystemPricelist->useValidationSet('add');
			$this->SystemPricelistElement->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->SystemPricelist, $data);
			
			$this->rdsResponse->data = $result;
			
		}
		
	}
	
}
