<?php
App::uses('AppHelper', 'View/Helper');

class StaticContentHelper extends AppHelper {
	
	public $StaticContent;
	
	public function __construct(View $View, $settings = array()) {
		
		$this->StaticContent = ClassRegistry::init('StaticContent');
		
	}
	
	public function get($key) {
		
		$staticContent = $this->StaticContent->find('first', array(
			'fields' => array(
				'StaticContent.content'
			),
			'conditions' => array(
				'StaticContent.key' => $key
			)
		));
		
		if ($staticContent) {
			return $staticContent['StaticContent']['content'];
		}
		
		return '["'.$key.'" not found]';
		
	}
	
}
