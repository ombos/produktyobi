<?php
App::uses('RdsController', 'Rds.Controller');
App::uses('Consts', 'Lib');

class AppController extends RdsController {
	
	public $uses = array(
		'UserRole',
		'UserRoleAssociation',
		'UserRoleDetail',
		'User',
		'CronEventReceiver',
		'CronEventNotification',
		'Project',
		'ProjectManager'
	);
	public $components = array(
		'Session',
		'Auth',
		'Authorize',
		'Security' => array(
			'className' => 'Rds.RdsSecurity',
			'csrfUseOnce' => false
		),
		'Email',
        'Filter',
		'Rds.RdsValidation',
		'Rds.RdsUpload',
		'Rds.RdsImage' => array(
			'types' => array(
				/*'project/background' => array(
					array(
						'prefix' => '1_',
						'width' => '2048',
						'height' => '1536',
						'crop' => true
					)
				)*/
			) 
		)
	);
	public $helpers = array(
		'Html' => array('className' => 'AppHtml'),
		'Form' => array('className' => 'Rds.RdsForm'),
		'Session' => array('className' => 'Rds.RdsSession'),
		'Authorize',
		'StaticContent'
	);
	public $authorizeMap = array();
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		
        date_default_timezone_set('Europe/Warsaw');
        Configure::write('Config.language', 'pol');
		$language = Configure::read('Config.language');
		
		Consts::init();
		
		$controller = $this->request->params['controller'];
		$action = $this->request->params['action'];
		
		if ($controller == 'service_communication') {
			// Authenticate and authorize in controller
			AuthComponent::$sessionKey = false;
		} else {
			$this->Auth->loginAction = '/users/public_login';
			$this->Auth->loginRedirect = '/pages/dashboard';
			$this->Auth->forcePasswordRedirect = '/profile/change_password';
			$this->Auth->logoutRedirect = '/';
			$this->Auth->unauthorizedRedirect = '/pages/public_unauthorized';
			
			$this->Auth->authenticate = array(
				'Form' => array(
					'fields' => array(
						'username' => 'email'
					),
					'scope' => array(
						'User.active' => true
					),
					'recursive' => 1
				)
			);
			$this->Auth->authorize = array(
				'Controller'
			);
			
			if ($this->Auth->user() && $this->Auth->user('force_pass_change') == 1) {
				
				if (($controller == 'profile' && $action == 'change_password') || ($controller == 'users' && $action == 'public_logout')) {
					
				} else {
					$this->redirect('/profile/change_password');
				}
				
			}
				
			
			if (strpos($action, 'public_') === 0) {
				$this->Auth->allow($action);
				$this->layout = 'public_pages';
			} elseif (strpos($action, 'validate_') === 0) {
				$this->Auth->allow($action);

				if (method_exists($this, $action)) {
					$this->Security->addUnlockedActions($action);
				}
			} elseif (strpos($action, 'filter_') === 0) {
				$this->Security->addUnlockedActions($action);

				if (strpos($action, 'filter_public_') === 0) {
					$this->Auth->allow($action);
				}
			} elseif (strpos($action, 'assets_') === 0) {
				$this->Auth->allow($action);
			}
			
		}
		
	}
	
	public function isAuthorized() {
	
		return $this->authorize($this->request->params['controller'], $this->action);
		
	}
	
	public function authorize($controller, $action) {
	
		$userRoleAssociation = $this->UserRoleAssociation->find('all', array(
			'recursive' => -1,
			'conditions' => array(
				'UserRoleAssociation.user_id' => AuthComponent::user('id')
			)
		));
		
		if ($userRoleAssociation) {
			foreach ($userRoleAssociation as $key => $value) {
				if ($value['UserRoleAssociation']['user_role_id'] == 1) {
					return TRUE;
				} else {
					$details = $this->UserRoleDetail->find('all', array(
						'recursive' => -1,
						'conditions' => array(
							'user_role_id' => $value['UserRoleAssociation']['user_role_id'],
							'controller' => $controller,
							'action' => $action
						)
					));
					if ($details) return TRUE;
				}
			}
		} else return FALSE;
		//return ($roleId == 1 || (isset($this->authorizeMap[$roleId]) && in_array($action, $this->authorizeMap[$roleId])));
		return FALSE;
	}
	
	public function refreshUser() {

		$user = $this->Auth->user();
		if ($this->User->isAdmin($user) && !empty($user['fake_id'])) $id = $user['fake_id'];
		else $id = $user['id'];
		
		$this->User->recursive = 0;
		$user = $this->User->findById($id);
		$main = $user['User'];
		unset($main['password'], $main['new_password'], $main['hash'], $user['User']);
		$user = array_merge($main, $user);
		$this->Session->write(AuthComponent::$sessionKey, $user);
		
	}
	
	protected function _throw404() {
		
		throw new NotFoundException();
		
	}
	
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
	
	public function getUserRoles($userId) {
		
		if ($userId) {
			
			$userRoles = $this->UserRoleAssociation->find('list', array(
				'recursive' => -1,
				'conditions' => array(
					'user_id' => $userId
				),
				'fields' => array(
					'UserRoleAssociation.user_role_id'
				)
			));

			return $userRoles;
			
		}
		
	}
    
    public function getHighestUserRoleId() {
        
		$this->User->recursive = 1;
		$user = $this->User->findById($this->Auth->user('id'));
        $highestUserRoleId = $this->User->getHighestUserRoleId($user);
        
        return $highestUserRoleId;
        
    }
    
    protected function _displayWorkInProgress() {
        
        $this->redirect('/pages/not_ready');
        
    }
    
    protected function _setLanguage() {
		
		if ($this->Session->check('Config.language')) {
			Configure::write('Config.language', $this->Session->read('Config.language'));
		} else {
			if (strpos($_SERVER['HTTP_ACCEPT_LANGUAGE'], 'pl') === 0) {
				Configure::write('Config.language', 'pol');
			} else {
				Configure::write('Config.language', 'eng');
			}
		}
        
    }
	
	public function __saveGlobalNotification($eventID, $jsonString) {
		
		// @orderID , @projectID, @simpleUserID
		// wyciąganie odbiorców danego eventu
		// musi wchodzić order ID -  do URLa do zamówienia
		// musi wchodzić project_id
		// musi wchodzić ID do elementu, np artykułu, zamówienia blogerskiego, etc - albo może nazwa ?
		
		if ($eventID && $jsonString && !empty($jsonString)) {
			
			$jsonArray = json_decode($jsonString);
			
			$receivers = $this->CronEventReceiver->find('all', array(
				'recursive' => -1,
				'conditions' => array(
					'cron_event_id' => $eventID
				)
			));
			
			if ($receivers) {
				
				foreach ($receivers as $receiver) {
					
					$userRoleID = $receiver['CronEventReceiver']['user_role_id'];
					
					if ($userRoleID == 1 || $userRoleID == 2) {
						
						$users = $this->UserRoleAssociation->find('list', array(
							'conditions' => array(
								'user_role_id' => $userRoleID
							),
							'fields' => array('user_id')
						));
						
						if ($users) {
							
							$notificationArray = array();
							
							foreach ($users as $user) {
							 	
								$notificationArray = array(
									'cron_event_id' => $eventID,
									'user_id' => $user,
									'is_notified' => 0,
									'json_data' => $jsonString
								);
								
								$this->CronEventNotification->create();
								$this->CronEventNotification->save($notificationArray);
							}
						}
						
					} else if ($userRoleID == 3) {
						
						$accountManagerID = $this->Project->find('first', array(
							'conditions' => array(
								'id' => $jsonArray->projectID
							)
						));
						
						if ($accountManagerID) {
							$notificationArray = array(
								'cron_event_id' => $eventID,
								'user_id' => $accountManagerID['Project']['account_manager_id'],
								'is_notified' => 0,
								'json_data' => $jsonString
							);
							$this->CronEventNotification->save($notificationArray);
						}
						
					} else if ($userRoleID == 10) {
						
						$projectManagers = $this->ProjectManager->find('list', array(
							'recursive' => -1,
							'conditions' => array(
								'project_id' => $jsonArray->projectID
							), 
							'fields' => array(
								'user_id'
							)
						));
						
						if ($projectManagers && !empty($projectManagers)) {
							
							foreach ($projectManagers as $key => $value) {
								$notificationArray = array(
									'cron_event_id' => $eventID,
									'user_id' => $value,
									'is_notified' => 0,
									'json_data' => $jsonString
								);
								$this->CronEventNotification->create();
								$this->CronEventNotification->save($notificationArray);
							}
							
						}
								
					}
					
				}
				
				if ($eventID == 4) {
					
					$blogers = $this->UserRoleAssociation->find('list', array(
						'conditions' => array(
							'user_role_id' => 6
						),
						'fields' => array('user_id')
					));
					
					if ($blogers) {
						
						$notificationArray = array();
							
						foreach ($blogers as $bloger) {
							
							$notificationArray = array(
								'cron_event_id' => $eventID,
								'user_id' => $bloger,
								'is_notified' => 0,
								'json_data' => $jsonString
							);
							
							$this->CronEventNotification->create();
							$this->CronEventNotification->save($notificationArray);
						}
						
					}
					
				}
				
			}
			
			$this->CronEventNotification->create();
			$notificationArray = array(
				'cron_event_id' => $eventID,
				'user_id' => $jsonArray->simpleUserID,
				'is_notified' => 0,
				'json_data' => $jsonString
			);
			$this->CronEventNotification->save($notificationArray);
			
		}
	}
}
