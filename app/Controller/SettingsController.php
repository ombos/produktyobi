<?php
App::uses('AppController', 'Controller');

class SettingsController extends AppController {
	
	public $uses = array(
		'Project',
		'Asset',
		'ProjectComponentType',
		'Order'
	);
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions();
		
	}
	
	public function index() {}
	
}
