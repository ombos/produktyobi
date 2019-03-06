<?php
App::uses('AppModel', 'Model');
App::uses('Project', 'Model');

class User extends AppModel {
	
	public $actsAs = array('Containable');
	
	public $hasOne = array(
		'AccountDetails',
	);
	public $hasMany = array(
		'UserRoleAssociation',
		'UserObiCategory'
	);
	public $hasAndBelongsToMany = array();
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array(),
			'public_register' => array(
				'email' => array(
					array(
						'rule' => 'email',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nieprawidłowy adres email')
					),
					array(
						'rule' => 'isUnique',
						'message' => __('Dla podanego adresu email, zostało już zarejestrowane konto')
					)
				),
				'password' => array(
					'rule' => array('minLength', 4),
					'required' => true,
					'allowEmpty' => false,
					'message' => __('Hasło musi być dłuższe niż %d znaki')
				),
				'password2' => array(
					array(
						'rule' => array('minLength', 4),
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Hasło musi być dłuższe niż %d znaki')
					),
					array(
						'rule' => array('equalToField', 'password'),
						'message' => __('Podane hasła nie pasują do siebie')
					)
				),
				'accepted_rules' => array(
					array(
                        'rule' => array('comparison', '!=', 0),
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Akceptacja regulaminu jest wymagana')
					)
				),
			),
			'public_login' => array(
				'email' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Podaj adres email')
					),
					array(
						'rule' => 'email',
						'message' => __('Nieprawidłowy adres email')
					)
				),
				'password' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Wpisz hasło')
					)
				)
			),
			'public_reset_password' => array(
				'email' => array(
					array(
						'rule' => 'email',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nieprawidłowy adres email')
					),
					array(
						'rule' => 'isNotUnique',
						'message' => __('Nie znaleziono podanego adresu email')
					)
				)
			),
			'public_reset_password_confirm' => array(
				'password' => array(
					'rule' => array('minLength', 4),
					'required' => true,
					'allowEmpty' => false,
					'message' => __('Hasło musi być dłuższe niż %d znaki')
				),
				'password2' => array(
					array(
						'rule' => array('minLength', 4),
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Password must be equal or longer than %d characters')
					),
					array(
						'rule' => array('equalToField', 'password'),
						'message' => __('Passwords do not match')
					)
				)
			),
			'add' => array(
				'email' => array(
					array(
						'rule' => 'email',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nieprawidłowy adres email')
					),
					array(
						'rule' => 'isUnique',
						'message' => __('Dla podanego adresu email, zostało już zarejestrowane konto')
					)
				)
			),
			'edit' => array(
				'email' => array(
					array(
						'rule' => 'email',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Nieprawidłowy adres email')
					)
				)
			),
			'edit_profile' => array(
				'name' => array(
					array(
						'rule' => 'notEmpty',
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Wpisz imię i nazwisko')
					)
				)
			),
			'change_password' => array(
				'new_password' => array(
					'rule' => array('minLength', 4),
					'required' => true,
					'allowEmpty' => false,
					'message' => __('Hało musi byc dłuższe niż %d znaki')
				),
				'new_password2' => array(
					array(
						'rule' => array('minLength', 4),
						'required' => true,
						'allowEmpty' => false,
						'message' => __('Hasło musi być dłuższe niż %d znaki')
					),
					array(
						'rule' => array('equalToField', 'new_password'),
						'message' => __('Podane hasła nie pasują do siebie')
					)
				)
			),
		);
		
	}
    
    protected $adminRolesIds = array(1, 2);
    protected $clientRoleId = 9;
	
	public function generateHash($email) {
		
		return AuthComponent::password($email.time());
		
	}
    
    public function isAdmin($user) {
        $highestRoleId = $this->getHighestUserRoleId($user);
        if (in_array($highestRoleId, $this->adminRolesIds)) {
            return true;
        }
        return false;
    }
    
    public function isClient($user) {
        $highestRoleId = $this->getHighestUserRoleId($user);
        if ($highestRoleId == $this->clientRoleId) {
            return true;
        }
        return false;
    }
    
    public function getAccountUsers($accountUserId) {
        
        $projectModel = new Project();
        
        $projects = $projectModel->find('all', array(
            'conditions' => array(
                'Project.account_manager_id' => $accountUserId,
            ),
            'fields' => array(
                'Project.id', 'Project.user_id', 'Project.account_manager_id', 
            ),
        ));
        $userIds = array();
        foreach ($projects as $project) {
            $userIds[] = $project['Project']['user_id'];
        }
        
        return $userIds;
        
    }
    
    public function getHighestUserRoleId($user) {
        
        $highestRoleId = null;
        
		if (isset($user['UserRoleAssociation']) && !empty($user['UserRoleAssociation'])) {
			foreach ($user['UserRoleAssociation'] as $userRoleAssociation) {
				if ($highestRoleId == null || $userRoleAssociation['user_role_id'] < $highestRoleId) {
					$highestRoleId = $userRoleAssociation['user_role_id'];
				}
			}
		}
        
        return $highestRoleId;
    }
    
    public function getAllClients($type) {
        return $this->getAllUsersWithRoleId($type, $this->clientRoleId);
    }
    
    public function getAllUsersWithRoleId($type, $roleId) {
        
        $clients = $this->find($type, array(
            'joins' => array( 
                array( 
                    'table' => 'user_role_associations', 
                    'alias' => 'UserRoleAssociation', 
                    'type' => 'inner',  
                    'conditions'=> array('UserRoleAssociation.user_id = User.id') 
                ), 
            ),
            'conditions' => array(
                'UserRoleAssociation.user_role_id' => $roleId,
            ),
        ));
        
        return $clients;
    }
	
}
