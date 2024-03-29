<?php
/**
 * Application level View Helper
 *
 * This file is application-wide helper file. You can put all
 * application-wide helper-related methods here.
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Helper
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

App::uses('Helper', 'View');
App::uses('User', 'Model');

/**
 * Application helper
 *
 * Add your application-wide methods in the class below, your helpers
 * will inherit them.
 *
 * @package       app.View.Helper
 */
class AppHelper extends Helper {
	
	protected $User;
	
	public function _globalNotifications() {
		
		$notifications = array();
		
		$this->User = new User();
		
		$user = $this->User->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'id' => AuthComponent::user('id')
			)
		));
		
		if ($user['User']['confirmed'] == false) {
			$notifications[] = array('message' => 'Twoje konto nie zostało jeszcze zatwierdzone przez administratora! (You were fucked by administrator)');
		}
		
		return $notifications;
		
	}
	
}
