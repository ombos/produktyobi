<?php
App::uses('AppController', 'Controller');

class UsersController extends AppController {
	
	public $uses = array(
		'User',
		'UserRole',
		'UserRoleAssociation',
		'UserObiCategory',
		'UserLog',
		'AccountDetails',
	);
	public $helpers = array(
		'UserCheck',
		'Display'
	);

	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions(
			'delete', 
			'delete_notification',
			'active',
			'public_register',
			'public_login',
			'edit', 'edit_worker', 'edit_client',
			'add',
			'get_user',
			'manage_service'
		);
        
        $userRolesList = $this->UserRole->find('list');
        $this->set(compact('userRolesList'));
		
	}
    
    protected function _fixUserRegisterData(&$inputData) {
        
        $data = $inputData;
        unset($data['UserRoleAssociation']);
        $data['UserRoleAssociation'] = array();
        
        if (is_array($inputData['UserRoleAssociation']['user_role_id'])) {
            foreach ($inputData['UserRoleAssociation']['user_role_id'] as $userRoleAssociation) {
                $data['UserRoleAssociation'][] = array(
                    'user_role_id' => $userRoleAssociation,
                    'active' => 0,
                );
            }
        }
        
        return $data;
        
    }
    
    protected function _validateUserRegisterData(&$data) {
        
        $result = $this->RdsValidation->validate($this->User, $data);
        if (count($data['UserRoleAssociation']) == 0) {
            $result['UserRoleAssociation']['user_role_id'] = array(
                'Rola użytkownika jest wymagana'
            );
        }
        return $result;
        
    }
	
	public function public_register() {
		
		if ($this->request->is('post')) {
            $data = $this->_fixUserRegisterData($this->request->data);
			$this->User->useValidationSet('public_register');
			$this->UserRoleAssociation->useValidationSet('public_register');
            $result = $this->_validateUserRegisterData($data);

			if ($result === true) {
				$hash = $this->User->generateHash($data['User']['email']);
				$data['User']['password'] = $this->Auth->password($data['User']['password']);
				$data['User']['password2'] = $data['User']['password'];
				$data['User']['hash'] = $hash;
				$data['User']['confirmed'] = true;
				$data['User']['active'] = true;
				
				if ($this->User->saveAssociated($data)) {
					$newUserId = $this->User->getInsertID();
					$this->Email->sendUserNew($newUserId);
                    $this->Email->notificateAdminsAboutNewUser($newUserId);
					$jsonString = array(
						'orderID' => null,
						'projectID' => null,
						'simpleUserID' => $newUserId,
						'elementID' => null
					);
					$this->__saveGlobalNotification(1, json_encode($jsonString));
					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'users', 'action' => 'public_register_success'))
					);
				}
			} else $this->rdsResponse->errors = $result;
		} else {
			if ($this->Auth->user()) $this->redirect($this->Auth->redirectUrl());
			else {
				$this->User->recursive = -1;
				$user = true;
				if ($user) {
					$this->request->data = $user;
					
					$userRoles = $this->UserRole->find('list', array(
						'conditions' => array(
							'UserRole.id' => array(3, 4)
						)
					));
					
					$this->set(compact('hash', 'userRoles'));
				} else $this->set('message', __('This is not a valid link.'));
			}
		}
		
	}
	
	public function public_register_success() {}
	
	public function public_login() {
		
		if ($this->request->is('post')) {
			$this->User->useValidationSet('public_login');
			$result = $this->RdsValidation->validate($this->User, $this->request->data);
			
			if ($result === true) {
				if ($this->Auth->login()) {
					
					$this->refreshUser();
					$this->UserLog->save(array(
						'user_id' => $this->Auth->user('id'),
						'action_name' => 'Logowanie do platformy'
					));
					
					if ($this->Auth->user('force_pass_change') == 1) {
						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'profile', 'action' => 'change_password'))
						);
					} else {
						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'pages', 'action' => 'dashboard'))
						);
					}
				} else $this->rdsResponse->errors = __('Your email or password was incorrect.');
			} else $this->rdsResponse->errors = $result;
		} elseif ($this->Auth->user()) $this->redirect($this->Auth->redirectUrl());
		
	}
	
	public function public_logout() {
		
		$this->UserLog->save(array(
			'user_id' => $this->Auth->user('id'),
			'action_name' => 'Wylogowanie z platformy'
		));
		return $this->redirect($this->Auth->logout());
		
	}
	
	public function public_password($hash) {
		
		if ($hash) {
			$this->User->recursive = -1;
			$user = $this->User->findByHash($hash);
				
			if ($user) {
				
				if ($this->request->is('post')) {
					
					$data = $this->request->data;
					$data['User']['password'] = $this->Auth->password($data['User']['password']);
					$data['User']['id'] = $user['User']['id'];
					if($this->User->save($data)) {
						$this->Session->setFlash(__('Hasło zostało ustawione. Teraz możesz się zalogować !'), 'default', array('type' => 'success'));
						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'users', 'action' => 'public_login'))
						);
					} else $this->rdsResponse->errors = $this->User->messages['save_error'];
				} 
				
				$this->set(compact('hash', 'userRoles'));
			} else $this->set('message', __('This is not a valid link.'));
		} else $this->set('message', __('This is not a valid link.'));
		
	}
	
	public function public_reset_password() {
		
		if ($this->request->is('post')) {
			$this->User->useValidationSet('public_reset_password');
			$result = $this->RdsValidation->validate($this->User, $this->request->data);
			if ($result === true) {
				$this->User->validate = null;
				$this->User->recursive = -1;
				$user = $this->User->findByEmail($this->request->data['User']['email']);
				
				if ($this->User->save(array(
					'id' => $user['User']['id'],
					'hash' => $this->User->generateHash($user['User']['email'])
				))) {
					$this->Email->sendUserResetPassword($this->User->id);
					
					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'users', 'action' => 'public_reset_password_sent'))
					);
				} else $this->rdsResponse->errors = $this->User->messages['save_error'];
			} else $this->rdsResponse->errors = $result;
		} elseif ($this->Auth->user()) $this->redirect($this->Auth->redirectUrl());
		
	}
	
	public function public_reset_password_sent() {}
	
	public function public_reset_password_confirm($hash) {
		
		if ($this->request->is('post')) {
			$this->User->useValidationSet('public_reset_password_confirm');
			$result = $this->RdsValidation->validate($this->User, $this->request->data);
			
			if ($result === true) {
				$this->User->recursive = 0;
				$user = $this->User->findByHash($hash);
				
				if ($user) {
					$this->User->validate = null;
					
					if ($this->User->save(array(
						'id' => $user['User']['id'],
						'password' => $this->Auth->password($this->request->data['User']['password'])
					))) {
						$this->rdsResponse->data = array(
							'redirect' => Router::url(array('controller' => 'users', 'action' => 'public_reset_password_success'))
						);
					} else $this->rdsResponse->errors = $this->User->messages['save_error'];
				} else $this->rdsResponse->errors = $this->User->messages['save_error'];
			} else $this->rdsResponse->errors = $result;
		} else {
			if ($this->Auth->user()) $this->redirect($this->Auth->redirectUrl());
			else {
				$this->User->recursive = -1;
				$user = $this->User->findByHash($hash);
				
				if ($user) $this->set('hash', $hash);
				else $this->set('message', __('This is not a valid link.'));
			}
		}
		
	}
	
	public function public_reset_password_success() {}
	
	public function index() {
		
		if ($this->request->is('post')) {
			$this->User->useValidationSet('edit');
			$result = $this->RdsValidation->validate($this->User, $this->request->data);
			
			if ($result === true) {
				$id = $this->request->data['User']['id'];
				$this->User->recursive = 0;
				$user = $this->User->find('first', array(
					'conditions' => array(
						'User.id' => $id
					)
				));
				
				if ($user && in_array($user['User']['user_role_id'], array(3, 4)) && $id != $this->Auth->user('id')) {
					if ($this->User->save($this->request->data)) {
						$this->rdsResponse->data = $this->User->find('first', array(
							'recursive' => 0,
							'fields' => array(
								'User.id', 'User.user_role_id', 'User.name', 'User.email', 'User.confirmed', 'User.active',
								'UserRole.name'
							),
							'conditions' => array(
								'User.id' => $id
							)
						));
						$this->rdsResponse->message = __('Data has been saved successfully.');
					} else $this->rdsResponse->errors = $this->User->messages['save_error'];
				} else $this->rdsResponse->errors = $this->User->messages['save_error'];
			} else $this->rdsResponse->errors = $result;
		} else {
			$userRoles = $this->UserRole->find('list', array(
				'conditions' => array(
					'UserRole.id' => array(3, 4)
				)
			));
			
			$this->set(compact('userRoles'));
		}
		
	}
	
	public function index_correctors() {}
	
	public function filter_index() {
        
        $userRoles = $this->UserRoleAssociation->find('list', array(
            'recursive' => -1,
            'conditions' => array(
                'user_id' => $this->Auth->user('id'),
            ),
            'fields' => array(
                'UserRoleAssociation.user_role_id'
            )
        ));
        
        $conditions = $this->Filter->buildConditions($this->request->data);
        $joins = array(
            array( 
                'table' => 'user_role_associations', 
                'alias' => 'UserRoleAssociation', 
                'type' => 'INNER',  
                'conditions'=> array('UserRoleAssociation.user_id = User.id') 
            ),
            array( 
                'table' => 'user_roles', 
                'alias' => 'UserRole', 
                'type' => 'INNER',  
                'conditions'=> array('UserRole.id = UserRoleAssociation.user_role_id') 
            ),
        );
        
        if (in_array(3, $userRoles)) {
            $conditions['User.id'] = $this->User->getAccountUsers($this->Auth->user('id'));
        }
        
        if (isset($this->request->data['author_list']) && $this->request->data['author_list'] === true) {
            $joins[] = array(
                'table' => 'order_articles', 
                'alias' => 'OrderArticle', 
                'type' => 'LEFT',
                'conditions'=> array('OrderArticle.user_id = User.id') 
            );
        }
		
		$usersDB = $this->User->find('all', array(
			'recursive' => 1,
			'fields' => array(
                'User.id', 'User.name', 'User.email', 'User.confirmed', 'User.active',
                'UserRoleAssociation.id', 'UserRole.id', 'UserRole.name', 'UserRoleAssociation.active',
            ),
            'joins' => $joins,
            'conditions' => $conditions,
		));
        
        $users = array();
		
		foreach ($usersDB as $userDB) {
            $userDB['UserRoleAssociation']['UserRole'] = $userDB['UserRole'];
            if (isset($users[$userDB['User']['id']])) {
                $users[$userDB['User']['id']]['UserRoleAssociation'][] = $userDB['UserRoleAssociation'];
                $users[$userDB['User']['id']]['UserRole'][] = $userDB['UserRole'];
                $users[$userDB['User']['id']]['User']['roleNames'] .= ' '.$userDB['UserRole']['name'];
            } else {
                $users[$userDB['User']['id']] = array(
                    'User' => $userDB['User'],
                    'UserRoleAssociation' => array(
                        $userDB['UserRoleAssociation'],
                    ),
                    'UserRole' => array(
                        $userDB['UserRole'],
                    ),
                );
                $users[$userDB['User']['id']]['User']['roleNames'] = $userDB['UserRole']['name'];
                if (isset($this->request->data['author_list']) && $this->request->data['author_list'] === true) {
                    $users[$userDB['User']['id']]['OrderArticle'] = $userDB['OrderArticle'];
                    $acceptedAllCount = 0;
                    foreach ($userDB['OrderArticle'] as $orderArticle) {
                        if ($orderArticle['accepted_all']) {
                            $acceptedAllCount++;
                        }
                    }
                    $users[$userDB['User']['id']]['order_article_accepted_all_count'] = $acceptedAllCount;
                }
            }
		}
        
		$this->rdsResponse->data['items'] = array_values($users);
		
	}
	
	public function filter_index_correctors() {
		
		$correctors = $this->UserRoleAssociation->find('all', array(
			'recursive' => 0,
			'conditions' => array(
				'UserRoleAssociation.user_role_id' => array(4, 5)
				)
			)
		);
		
		$correctorsArray = array();
		foreach ($correctors as $value) {
			
			$value['view_url'] = Router::url(array(
				'controller' => 'users',
				'action' => 'edit_corrector',
				$value['User']['id']
			));
			
			$correctorsArray[] = $value;
			
		}
		
		$this->rdsResponse->data['items'] = $correctorsArray;
		
	}
	
	public function add() {
		
		if ($this->request->is('post')) {
			$this->User->useValidationSet('add');
			$result = $this->RdsValidation->validate($this->User, $this->request->data);
			
			if ($result === true) {
				$data = $this->request->data;
				$data['AccountDetails']['default_margin'] = 30;
				
				$hash = $this->User->generateHash($data['User']['email']);
				$data['User']['hash'] = $hash;
				$data['User']['confirmed'] = true;
				$data['User']['active'] = true;
				
				if ($this->User->saveAssociated($data)) {
					$newUserId = $this->User->getInsertID();
					
					foreach ($data['RoleAssociation']['user_role_id'] as $key => $value) {
						$roleData = array(
							'user_id' => $newUserId,
							'user_role_id' => $value,
							'active' => 0
						);
						$this->UserRoleAssociation->create();
						$this->UserRoleAssociation->save($roleData);
					}
					$this->Email->sendUserAdd($this->User->id);
					$this->rdsResponse->data = array(
						'redirect' => Router::url(array('controller' => 'users', 'action' => 'index'))
					);
				}
			} else $this->rdsResponse->errors = $result;
		} else {
			$userRoles = $this->UserRole->find('list', array(
				'conditions' => array(
					'UserRole.id' => array(3, 4)
				)
			));
			$userRoles = $this->UserRole->find('list');

			$this->set(compact('userRoles'));
		}
		
	}
    
    protected function _transformUserRoleAssociations(&$data) {
        
		if (isset($data['UserRoleAssociation'])) {
			
			$formUserRoleAssocations = $data['UserRoleAssociation']['user_role_id'];
			
			if (is_array($formUserRoleAssocations) && count($formUserRoleAssocations) > 0) {
				$currentUserRoleAssociations = $this->UserRoleAssociation->find('all', array(
					'conditions' => array('UserRoleAssociation.user_id' => $data['User']['id'])
				));
				$finalUserRoleAssocations = array();
				unset($data['UserRoleAssociation']);
				
				foreach ($currentUserRoleAssociations as $currentUserRoleAssociation) {
					$userRoleId = $currentUserRoleAssociation['UserRoleAssociation']['user_role_id'];
					$key = array_search($userRoleId, $formUserRoleAssocations);
					if ($key !== false) {
						$finalUserRoleAssocations[] = $currentUserRoleAssociation['UserRoleAssociation'];
						unset($formUserRoleAssocations[$key]);
					}
				}
				
				foreach ($formUserRoleAssocations as $formUserRoleAssocation) {
					$finalUserRoleAssocations[] = array(
						'user_id' => $data['User']['id'],
						'user_role_id' => $formUserRoleAssocation,
						'active' => false
					);
				}
				
				$data['UserRoleAssociation'] = $finalUserRoleAssocations;
				
				return true;
			} 
			
			return false;
			
		}
		
    }
	
	public function edit($id) {

		if ($id) {
			
			if ($this->request->is('post')) {
                $data = $this->request->data;
                if ($this->_transformUserRoleAssociations($data)) {
                    $this->User->useValidationSet('edit');
                    $result = $this->RdsValidation->validate($this->User, $data);
                    
                    if ($result === true) {
                        $this->UserRoleAssociation->deleteAll(array('user_id' => $data['User']['id']));
                        if ($this->User->saveAssociated($data)) {
                            $this->Session->setFlash(__('Informacje zostały zaktualizowane !'), 'default', array('type' => 'success'));
                            $this->rdsResponse->data = array(
                                'redirect' => Router::url(array('controller' => 'users', 'action' => 'edit', $id))
                            );
                        } else $this->rdsResponse->errors = $this->User->messages['save_error'];
                    } else $this->rdsResponse->errors = $result;
                } else $this->rdsResponse->errors = 'Użytkownik musi mieć wybraną jakąś rolę';
				
			} else {
				$user = $this->User->find('first', array(
					'recursive' => 1,
					'conditions' => array(
						'User.id' => $id
					)
				));
                
                $userRoles = $this->_getPossibleUserRolesForUser($user['User']['id']);
				$userRolesAssociated = $this->UserRoleAssociation->find('list', array(
					'recursive' => -1,
					'conditions' => array(
						'user_id' => $id
					),
					'fields' => array(
						'user_role_id'
					)
				));
				
				$userObiCategories = $this->UserObiCategory->find('all', array(
					'recursive' => 0,
					'conditions' => array(
						'user_id' => $id
					)
				));
				
				$this->request->data = $user;
				$this->set(compact('userRoles','userRolesAssociated', 'userObiCategories', 'id'));
			}	
			
		} else $this->_throw404();
		
	}
    
	public function history() {
		
		$history = $this->UserLog->find('all', array(
			'recursive' => 1,
			'order' => array(
				'UserLog.created DESC'
			)
		));
		
		$this->set(compact('history'));
		
	}
	
    protected function _getPossibleUserRolesForUser($userId) {
        $userRoles = array();
        /*if ($this->Authorize->isAllowed($userId, array(1))) {
            $userRoles = $this->UserRole->find('list', array('conditions' => array('UserRole.id' => 1)));
        } elseif($this->Authorize->isAllowed($userId, array(2))) {
            $userRoles = $this->UserRole->find('list', array('conditions' => array('UserRole.id' => 2)));
        } elseif($this->Authorize->isAllowed($userId, array(3))) {
            $userRoles = $this->UserRole->find('list', array('conditions' => array('UserRole.id' => 3)));
        } elseif($this->Authorize->isAllowed($userId, array(4,5,6,7,8))) {
            $userRoles = $this->UserRole->find('list', array('conditions' => array('UserRole.id' => array(4,5,6,7,8))));
        } elseif($this->Authorize->isAllowed($userId, array(9))) {
            $userRoles = $this->UserRole->find('list', array('conditions' => array('UserRole.id' => array(9))));
        } elseif($this->Authorize->isAllowed($userId, array(10))) {
			$userRoles = $this->UserRole->find('list', array('conditions' => array('UserRole.id' => array(10))));
		}*/
		
		$userRoles = $this->UserRole->find('list');
		
        return $userRoles;
    }
	
	public function edit_client($id) {

		if ($id) {
            if ($id == $this->Auth->user('id')) {
                
                if ($this->request->is('post')) {
                    $data = $this->request->data;
                    $this->User->useValidationSet('edit');
                    $result = $this->RdsValidation->validate($this->User, $data);
                    if ($result === true) {
                        if ($this->User->saveAssociated($data)) {
                            $this->Session->setFlash(__('Informacje zostały zaktualizowane !'), 'default', array('type' => 'success'));
                            $this->rdsResponse->data = array(
                                'redirect' => Router::url(array('controller' => 'pages', 'action' => 'dashboard'))
                            );
                        } else $this->rdsResponse->errors = $this->User->messages['save_error'];
                    } else $this->rdsResponse->errors = $result;
                } else {
                    $user = $this->User->find('first', array(
                        'recursive' => 1,
                        'conditions' => array(
                            'User.id' => $id
                        )
                    ));
                    
                    $userRoles = $this->_getPossibleUserRolesForUser($user['User']['id']);
                    $userRolesAssociated = $this->UserRoleAssociation->find('list', array(
                        'recursive' => -1,
                        'conditions' => array(
                            'user_id' => $id
                        ),
                        'fields' => array(
                            'user_role_id'
                        )
                    ));
                    
                    $systemLanguages = $this->SystemLanguage->find('list');
                    $systemTextTypes = $this->SystemTextType->find('list');
                    $systemTopicTypes = $this->SystemTopicType->find('list');
                    $this->request->data = $user;
                    $this->set(compact('systemLanguages','systemTextTypes','systemTopicTypes','userRoles','userRolesAssociated'));
                }	
                
            } else $this->_throw404();
		} else $this->_throw404();
		
	}
	
	public function edit_worker($id) {

		if ($id) {
            if ($id == $this->Auth->user('id')) {
                
                if ($this->request->is('post')) {
                    $data = $this->request->data;
                    if ($this->_transformUserRoleAssociations($data)) {
                        $this->User->useValidationSet('edit');
                        $result = $this->RdsValidation->validate($this->User, $data);
                        
                        if ($result === true) {
                            $this->UserRoleAssociation->deleteAll(array('user_id' => $data['User']['id']));
                            if ($this->User->saveAssociated($data)) {
                                $this->Session->setFlash(__('Informacje zostały zaktualizowane !'), 'default', array('type' => 'success'));
                                $this->rdsResponse->data = array(
                                    'redirect' => Router::url(array('controller' => 'pages', 'action' => 'dashboard'))
                                );
                            } else $this->rdsResponse->errors = $this->User->messages['save_error'];
                        } else $this->rdsResponse->errors = $result;
                    } else $this->rdsResponse->errors = 'Użytkownik musi mieć wybraną jakąś rolę';
                    
                } else {
                
                    $user = $this->User->find('first', array(
                        'recursive' => 1,
                        'conditions' => array(
                            'User.id' => $id
                        )
                    ));
                    
                    $userRoles = $this->_getPossibleUserRolesForUser($user['User']['id']);
                    $userRolesAssociated = $this->UserRoleAssociation->find('list', array(
                        'recursive' => -1,
                        'conditions' => array(
                            'user_id' => $id
                        ),
                        'fields' => array(
                            'user_role_id'
                        )
                    ));
                    
                    $this->request->data = $user;
                    $systemLanguages = $this->SystemLanguage->find('list');
                    $systemTextTypes = $this->SystemTextType->find('list');
                    $systemTopicTypes = $this->SystemTopicType->find('list');
                    $publisherWebsites = $this->PublisherWebsite->find('all', array(
                        'recursive' => -1,
                        'conditions' => array(
                            'user_id' => $id
                        )
                    ));
                    
                    $blogerWebsites = $this->BlogerWebsite->find('all', array(
                        'recursive' => -1,
                        'conditions' => array(
                            'user_id' => $id
                        )
                    ));
                    
                    $this->set(compact('systemLanguages', 'systemTextTypes', 'systemTopicTypes', 'userRoles', 'userRolesAssociated', 'publisherWebsites', 'blogerWebsites', 'id'));
                }
                
            } else $this->_throw404();
		} else $this->_throw404();
		
	}
	
	public function edit_corrector($id) {
		
		if ($id) {
			
			if ($this->request->is('post')) {
				$data = $this->request->data;
				
				$this->UserCorrectorAssociation->deleteAll(array('corrector_user_id' => $id));
				
				if (isset($data['UserCorrectorAssociation']['corrector_user_id'][0])) {
					foreach ($data['UserCorrectorAssociation']['corrector_user_id'] as $value) {
						$this->UserCorrectorAssociation->create();
						$this->UserCorrectorAssociation->save(array('user_id' => $value, 'corrector_user_id' => $id));
					}
				}
				
				$this->Session->setFlash(__('Informacje zostały zaktualizowane !'), 'default', array('type' => 'success'));
				$this->rdsResponse->data = array(
					'redirect' => Router::url(array('controller' => 'users', 'action' => 'index_correctors'))
				);
				
			} else {
				$users = $this->UserRoleAssociation->find('list', array(
					'recursive' => 0,
					'conditions' => array(
						'UserRoleAssociation.user_role_id' => array(9)
					),
					'fields' => array(
						'UserRoleAssociation.user_id', 'User.name'
					)
				));
				
				$usersAssociated = $this->UserCorrectorAssociation->find('list', array(
					'recursive' => -1,
					'conditions' => array(
						'UserCorrectorAssociation.corrector_user_id' => $id
					),
					'fields' => array(
						'UserCorrectorAssociation.user_id'
					)
				));
				
				$this->set(compact('users', 'usersAssociated'));
			}
			
		} else $this->_throw404();
		
	}
	
	public function delete() {
		
		$id = $this->request->data;
		$user = $this->User->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'User.id' => $id,
			)
		));
		
		if ($user && $this->User->delete($id)) {
			$this->UserRoleAssociation->deleteAll(array('user_id' => $id));
			$this->AccountDetails->deleteAll(array('user_id' => $id));
			$this->rdsResponse->data = true;
		} 
		else $this->rdsResponse->errors = $this->User->messages['delete_error'];
		
	}
	
	public function delete_notification() {
		
		$data = $this->request->data;
		$notificationDeleteData = array(
			'user_id' => $data['userId'],
			'model' => $data['notificationModel'],
			'model_id' => $data['notificationModelId']
		);
		
		if ($this->UserDashboardNotification->save($notificationDeleteData)) {
			return TRUE;
		}
		
	}
	
	public function active() {
		
		$user = $this->User->find('first', array(
			'recursive' => -1,
			'conditions' => array(
				'User.id' => $this->request->data['User']['id'],
				'User.confirmed' => true,
			)
		));
		
		if ($user && $this->User->save(array(
			'id' => $this->request->data['User']['id'],
			'active' => $this->request->data['User']['active']
		))) $this->rdsResponse->data = true;
		else $this->rdsResponse->errors = $this->User->messages['save_error'];
		
	}
	
	public function view_profile($id) {
		
		if ($id) {
			$user = $this->User->find('first', array(
				'recursive' => 0,
				'conditions' => array(
					'User.id' => $id
				)
			));
			
			if ($user) {
				
				$this->data = $user;
				
			} else $this->_throw404();
			
		} else $this->_throw404();
		
	}
	
	public function get_user($userId) {
		
		if ($userId) {
			$user = $this->User->find('first', array(
				'recursive' => 0,
				'conditions' => array(
					'User.id' => $userId
				)
			));
			$this->rdsResponse->data = $user;
		} else {
			$this->rdsResponse->data = false;
		}
		
	}
	
}
