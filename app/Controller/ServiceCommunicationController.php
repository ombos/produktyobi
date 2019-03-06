<?php
App::uses('AppController', 'Controller');

class ServiceCommunicationController extends AppController {
	
	const ERROR_UNAUTHENTICATED = 1;
	const ERROR_INVALID_DATA = 2;
	
	public $uses = array(
		'ApplicationToken',
		'Asset',
		'User',
		'Project',
		'Location',
		'Walk3D',
		'ProjectComponent',
		'I18nModel'
	);
	
	private $_user;
	
	private $_localeMap = array(
		'eng' => 'en',
		'pol' => 'pl'
	);
	
	public function beforeFilter() {
		
		parent::beforeFilter();
		
		$this->autoRender = false;
		$this->rdsResponse = new RdsResponse();
		$this->_returnRdsResponse = true;
		
		$this->Auth->allow();
		$this->Security->addUnlockedActions(
			'unauthenticated',
			$this->request->action
		);
		
		/*$this->request->data['Token'] = 'c0134b8f74715d54998af9b8aafcb85778edc8f6';
		$this->request->data['Data'] = 56;
		$this->_returnRdsResponse = false;*/
		
		if ($this->request->action == 'login') {
		    return;
		}
		
		if ($this->request->action != 'unauthenticated' && isset($this->request->data['token'])) {
			$token = $this->request->data['token'];
			$applicationToken = $this->ApplicationToken->findByToken($token);
			
			if ($applicationToken) {
				$applicationTokenTypeId = $applicationToken['ApplicationToken']['application_token_type_id'];
				
				if (array_search($this->request->action, $this->_authorizeMap[$applicationTokenTypeId]) !== false) {
					if ($applicationToken['ApplicationToken']['user_id'] != 0) {
						$userId = $applicationToken['ApplicationToken']['user_id'];
						$user = $this->_getUserById($userId);
						
						if ($user) {
							$this->_user = $user;
							return;
						}
					}
				}
			}
		}
		
		$this->setAction('unauthenticated');
		
	}
	
	public function unauthenticated() {
		
		$this->_respondUnauthenticated();
		
	}
	
	public function set_walk3d_model3d_data() {
		
		if ($this->_isAuthenticatedAsUser()) {
			$architectId = $this->_user['User']['architect_id'];
		}
		
		if (isset($architectId) && isset($this->request->data['data'])) {
			$data = json_decode($this->request->data['data'], true);
			$walk3dId = $data['id'];
			$locationId = $data['location_id'];
			
			$location = $this->Location->find('first', array(
				'recursive' => 0,
				'fields' => array(
					'Project.id'
				),
				'conditions' => array(
					'Location.id' => $locationId,
					'Project.architect_id' => $architectId
				)
			));
			
			if ($location) {
				$this->Walk3D->save(array(
					'id' => $walk3dId,
					'model3d_data' => $data['model3d_data']
				));
				return;
			}
		}
		
		$this->_respondInvalidData();
		
	}
	
	public function get_asset_file() {
		
		if (isset($this->request->data['data'])) {
			$assetId = $this->request->data['data'];
			
			if ($this->_isAuthenticatedAsUser()) {
				$architectId = $this->_user['User']['architect_id'];
			}
			
			if ($this->AssetHandler->assetBelongsToArchitect($assetId, $architectId)) {
				$platform = $this->request->data['platform'];
				$this->AssetHandler->getAssetFile($assetId, $platform);
				return;
			}
		}
		
		$this->_respondInvalidData();
		
	}
	
	public function get_user() {
		
		if ($this->_isAuthenticatedAsUser()) {
			$this->rdsResponse->data = json_encode($this->_user);
			return;
		}
		
		$this->_respondInvalidData();
		
	}
    
    public function get_projects_by_user() {
        
        if ($this->_isAuthenticatedAsUser()) {
            $architectId = $this->_user['User']['architect_id'];
        }
        
        if (isset($architectId) && isset($this->request->data['data'])) {
            $userId = $this->request->data['data'];
                
            $projects = $this->Project->find('all', array(
                'fields' => array(
                    'Project.id', 'Project.architect_id', 'Project.user_id', 'Project.name'
                ),
                'conditions' => array(
                    'Project.architect_id' => $architectId,
                )
            ));
			
			foreach ($projects as &$project) {
				$locations = $this->Location->find('all', array(
					'recursive' => 0,
					'fields' => array(
						'Location.id', 'Location.project_id', 'Location.location_type_id', 'Location.x', 'Location.y', 'Location.name', 'Location.color',
						'LocationType.id',
						'Panorama.id', 'Panorama.location_id',
						'Walk3D.id', 'Walk3D.location_id', 'Walk3D.model3d_data'
					),
					'conditions' => array(
						'Location.project_id' => $project['Project']['id']
					)
				));
				
				$project['Location'] = array();
				foreach ($locations as &$location) {
					$projectLocation = $location['Location'];
					$projectLocation['LocationType'] = $location['LocationType'];
					$projectLocation['LocationType']['name'] = $this->_getTranslations('LocationType', $location['LocationType']['id'], 'name');
					
					if (isset($location['Panorama']['id'])) {
						$projectLocation['Panorama'] = $location['Panorama'];
					} else {
						$projectLocation['Walk3D'] = $location['Walk3D'];
					}
					
					$project['Location'][] = $projectLocation;
				}
			}
                    
            $this->rdsResponse->data = json_encode($projects);
            return;
        }
        
        $this->_respondInvalidData();
        
    }
	
	public function get_project_by_location() {
		
		if ($this->_isAuthenticatedAsUser()) {
			$architectId = $this->_user['User']['architect_id'];
		}
		
		if (isset($architectId) && isset($this->request->data['data'])) {
			$locationId = $this->request->data['data'];
			
			$location = $this->Location->find('first', array(
				'recursive' => 0,
				'fields' => array(
					'Location.id', 'Location.project_id', 'Location.location_type_id', 'Location.x', 'Location.y', 'Location.name', 'Location.color',
					'LocationType.id',
					'Panorama.id', 'Panorama.location_id',
					'Walk3D.id', 'Walk3D.location_id', 'Walk3D.model3d_data'
				),
				'conditions' => array(
					'Location.id' => $locationId
				)
			));
			
			if ($location) {
				$projectId = $location['Location']['project_id'];
				
				$project = $this->Project->find('first', array(
					'fields' => array(
						'Project.id', 'Project.architect_id', 'Project.user_id', 'Project.name'
					),
					'conditions' => array(
						'Project.id' => $projectId,
						'Project.architect_id' => $architectId
					)
				));

				if ($project) {
					$project['Location'] = array(
						0 => array()
					);
					$project['Location'][0] = $location['Location'];
					$project['Location'][0]['LocationType'] = $location['LocationType'];
					$project['Location'][0]['LocationType']['name'] = $this->_getTranslations('LocationType', $location['LocationType']['id'], 'name');
					
					if (isset($location['Panorama']['id'])) {
						$project['Location'][0]['Panorama'] = $location['Panorama'];
					} else {
						$project['Location'][0]['Walk3D'] = $location['Walk3D'];
					}
					
					$this->rdsResponse->data = json_encode($project);
					return;
				}
			}
		}
		
		$this->_respondInvalidData();
		
	}
	
	public function get_assets_by_location() {
		
		if ($this->_isAuthenticatedAsUser()) {
			$architectId = $this->_user['User']['architect_id'];
		}
		
		if (isset($architectId) && isset($this->request->data['data'])) {
			$locationId = $this->request->data['data'];
			
			$location = $this->Location->find('first', array(
				'recursive' => 0,
				'fields' => array(
					'Location.id'
				),
				'conditions' => array(
					'Location.id' => $locationId,
					'Project.architect_id' => $architectId
				)
			));
			
			if ($location) {
				$assets = $this->Asset->find('all', array(
					'fields' => array(
						'Asset.id', 'Asset.project_id', 'Asset.location_id', 'Asset.type', 'Asset.name'
					),
					'conditions' => array(
						'Asset.location_id' => $locationId
					)
				));
				
				$this->rdsResponse->data = json_encode($assets);
				return;
			}
		}
		
		$this->_respondInvalidData();
		
	}
	
	public function get_assets_by_user() {
		
		if ($this->_isAuthenticatedAsUser()) {
			$architectId = $this->_user['User']['architect_id'];
		}
		
		if (isset($architectId) && isset($this->request->data['data'])) {
			$projectIds = $this->Project->find('list', array(
                'fields' => array(
                    'Project.id'
                ),
                'conditions' => array(
                    'Project.architect_id' => $architectId,
                )
            ));
			
			$locationIds = $this->Location->find('list', array(
				'recursive' => 0,
				'fields' => array(
					'Location.id'
				),
				'conditions' => array(
					'Location.project_id' => $projectIds
				)
			));
			
			$assets = $this->Asset->find('all', array(
				'fields' => array(
					'Asset.id', 'Asset.project_id', 'Asset.location_id', 'Asset.type', 'Asset.name'
				),
				'conditions' => array(
					'OR' => array(
						'Asset.project_id' => $projectIds,
						'Asset.location_id' => $locationIds
					)
				)
			));
			
			$this->rdsResponse->data = json_encode($assets);
			return;
		}
		
		$this->_respondInvalidData();
		
	}
    
    public function login() {
        
        if (isset($this->request->data['data'])) {
            $loginData = json_decode($this->request->data['data']);
            
            $token = $this->_getUserByEmailPassword($loginData->email, $loginData->password);
            
            if ($token) {
                $this->rdsResponse->data = $token;
                return;
            }
        }
        
        $this->_respondInvalidData();
        
    }
	
	private function _respondUnauthenticated() {
		
		$this->rdsResponse->errors = ServiceCommunicationController::ERROR_UNAUTHENTICATED;
		
	}
	
	private function _respondInvalidData() {
		
		$this->rdsResponse->errors = ServiceCommunicationController::ERROR_INVALID_DATA;
		
	}
	
	private function _isAuthenticatedAsUser() {
		
		return isset($this->_user);
		
	}
    
    private function _getUserById($id) {
        
        $user = $this->User->find('first', array(
            'recursive' => 0,
            'fields' => array(
                'User.id', 'User.architect_id', 'User.user_role_id', 'User.email', 'User.name',
                'UserRole.id'
            ),
            'conditions' => array(
                'User.id' => $id,
                'User.confirmed' => true,
                'User.active' => true
            )
        ));

        if ($user) {
            $user['UserRole']['name'] = $this->_getTranslations('UserRole', $user['UserRole']['id'], 'name');
            return $user;
        }
        
        return false;
        
    }
    
    private function _getUserByEmailPassword($email, $password) {
        
        $user = $this->User->find('first', array(
            'recursive' => 0,
            'fields' => array(
                'User.id'
            ),
            'conditions' => array(
                'User.email' => $email,
                'User.password' => $this->Auth->password($password),
                'User.confirmed' => true,
                'User.active' => true
            )
        ));

        if ($user) {
            $token = $this->ApplicationToken->generateApplicationTokenForUser($user['User']['id']);
            if ($token) {
                return $token;
            }
        }
        
        return false;
        
    }
	
	private function _getTranslations($model, $foreignKey, $field) {
		
		$records = $this->I18nModel->find('all', array(
			'fields' => array(
				'I18nModel.locale', 'I18nModel.content'
			),
			'conditions' => array(
				'I18nModel.model' => $model,
				'I18nModel.foreign_key' => $foreignKey,
				'I18nModel.field' => $field
			)
		));
		
		$translations = array();
		
		foreach ($records as $record) {
			$locale = $this->_localeMap[$record['I18nModel']['locale']];
			$translations[$locale] = $record['I18nModel']['content'];
		}
		
		return $translations;
		
	}
	
}
