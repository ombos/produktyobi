<?php
App::uses('AppHelper', 'View/Helper');
App::uses('UserRoleAssociation', 'Model');

class AuthorizeHelper extends AppHelper {
	
	protected $userRoleAssociation;
	
	public $helpers = array(
		'Html'
	);
	
	public function __construct(View $View, $settings = array()) {
		
		parent::__construct($View, $settings);
		$this->UserRoleAssociation = new UserRoleAssociation();
		
	}
	
	public function check($controller, $action) {

		$controllerName = $controller;
		
		$controller = preg_replace_callback('/([^_]+)_?/', function($match) {
			return ucfirst($match[1]);
		}, $controller);
		App::import('Controller', $controller);
		$controller .= 'Controller';
		$controller = new $controller();
		$controller->constructClasses();

		return $controller->authorize($controllerName, $action);
		
	}
	
	public function link($title, $url, $options = array()) {
		
		return $this->check($url['controller'], $url['action']) ? $this->Html->link($title, $url, $options) : '';
		
	}
	
	public function isAllowed($userId, $allowedRolesIds) {
		
		return count(array_intersect($allowedRolesIds, $this->_getRoles($userId))) > 0;
		
	}
	
	protected function _getRoles($userId) {
		
		if ($userId) {
			
			$userRolesIds = $this->UserRoleAssociation->find('list', array(
				'recursive' => -1,
				'conditions' => array(
					'user_id' => $userId
				),
				'fields' => array(
					'UserRoleAssociation.user_role_id'
				)
			));

			return $userRolesIds;
			
		}
		
	}
	
	/*
	public function getUserAction($userRoles, $action) {
		
		if ($userRoles && $action) {
			
			$admins = array(1, 2, 3);
			$correctors = array(4, 5);
			$workers = array(6, 7, 8);
			$clients = array(9);
			$role = '';
		
			foreach($userRoles as $key => $value) {
				if (in_array($value, $workers)) {
					$role = '_worker';
				} else if (in_array($value, $clients)) {
					$role = '_client';
				} else if (in_array($value, $correctors)) {
					$role = '_corrector';
				}
			}
			
			return $action.$role;
		
		}	else {
			return $action;
		}
		
	}
	*/
}
