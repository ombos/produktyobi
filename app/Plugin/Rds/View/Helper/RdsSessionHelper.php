<?php
App::uses('SessionHelper', 'View/Helper');

/**
 * Rds Session Helper
 * 
 * Extends CakePHP Session Helper to work with AngularJS
 * 
 * Usage:
 * public $helpers = array(
 *   'Session' => array(
 *     'className' => 'Rds.RdsSession'
 *   )
 * );
 */
class RdsSessionHelper extends SessionHelper {
	
	public function __construct(View $view, array $settings = array()) {
		
		if (isset($settings['flash'])) {
			foreach ($settings['flash'] as $type => $class) {
				$this->_types[$type] = $class;
			}
		}
		
		parent::__construct($view, $settings);
		
	}
	
	public function flash($key = 'flash', $attrs = array()) {
		
		if (CakeSession::check('Message.' . $key)) {
			$flash = CakeSession::read('Message.' . $key);
		} else {
			$flash = array(
				'message' => '',
				'element' => 'default',
				'params' => array()
			);
		}
		
		if ($flash['element'] == 'default') $flash['element'] = 'Rds.flash';
		$flash['params']['key'] = $key;
		
		CakeSession::write('Message.' . $key, $flash);
		
		return parent::flash($key, $attrs);
		
	}
	
}
