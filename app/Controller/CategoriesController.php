<?php
App::uses('AppController', 'Controller');

class CategoriesController extends AppController {
	
	public $helpers = array();
    public $uses = array(
		'ObiCategory',
		'ObiCategoryData'
    );
	public $components = array();
    
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'filter_index',
			'delete'
		);
		
	}
	
	public function index() {
		
	}
	
	public function children($categoryId) {
		
		if (!$categoryId) $this->_throw404();
		
		$this->set(compact('categoryId'));
	}
	
	public function delete() {
		
		$id = $this->request->data;
		$obiCategory = $this->ObiCategory->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'ObiCategory.id' => $id,
			)
		));
		
		if ($obiCategory && $this->ObiCategory->delete($id)) {
			$this->ObiCategoryData->deleteAll(array('obi_category_id' => $id));
			$this->rdsResponse->data = true;
		} 
		else $this->rdsResponse->errors = $this->ObiCategory->messages['delete_error'];
		
	}
	
	public function filter_index($categoryId = false) {	
		
		if ($categoryId) {
			$parentId = $categoryId;
		} else {
			$parentId = NULL;
		}
		
		$categories = $this->ObiCategory->find('all', array(
			'recursive' => -1,
			'conditions' => array(
				'parent_id' => $parentId
			)
		));
		
		if ($categories) {
			$this->rdsResponse->data['items'] = $categories;
		} else {
			$this->rdsResponse->data['items'] = null;
		}
	}
	
	public function add() {
		
		if ($this->request->is('post')) {
			$this->ObiCategory->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->ObiCategory, $this->request->data);
			
			if ($result === true) {
				$data = $this->request->data;
				
				if ($this->ObiCategory->save($data)) {
					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'categories', 'action' => 'index'))
					);
				}
			} else $this->rdsResponse->errors = $result;
		}
	}
	
	public function edit($id) {
		
		if ($id) {
			
			if ($this->request->is('post')) {
                $data = $this->request->data;
               
                    $this->User->useValidationSet('edit');
                    $result = $this->RdsValidation->validate($this->ObiCategory, $data);
                    
                    if ($result === true) {
                        
                        if ($this->ObiCategory->save($data)) {
                            $this->Session->setFlash(__('Informacje zostały zaktualizowane !'), 'default', array('type' => 'success'));
                            $this->rdsResponse->data = array(
                                'redirect' => Router::url(array('controller' => 'categories', 'action' => 'index'))
                            );
                        } else $this->rdsResponse->errors = $this->ObiCategory->messages['save_error'];
                    } else $this->rdsResponse->errors = $result;

				
			} else {
				$category = $this->__getCategoryData($id);
				
				$categoryAttrs = array();
			
				$categoryAttrs = $this->ObiCategoryData->find('all', array(
					'recursive' => -1,
					'conditions' => array(
						'ObiCategoryData.obi_category_id' => $id
					)
				));
				
				$this->set(compact('category', 'categoryAttrs'));
			}
			
			
			
		} else {
			$this->_throw404();
		}
	}
	
	protected function __getCategoryData($categoryId) {
		
		if ($categoryId) {
			
			$category = $this->ObiCategory->find('first', array(
				'recursive' => 1,
				'conditions' => array(
					'ObiCategory.id' => $categoryId
				)
			));
			
			if ($category) {
				return $category;
			} else {
				return FALSE;
			}
		}
	}
	
	protected function __categoryBreadcrumbs() {
		return TRUE;
	}
    
}
