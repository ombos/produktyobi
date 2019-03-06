<?php
App::uses('Component', 'Controller');
App::uses('CakeEmail', 'Network/Email');

class EmailComponent extends Component {
    
	const SUBJECT_PREFIX = 'PRODUKTYOBI.PL - ';
	
    protected $_controller;
    
    public function initialize(Controller $controller) {
        
        $this->_controller = $controller;
        
    }
	
    public function sendArchitectRegister($userId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(self::SUBJECT_PREFIX.__('Rejestracja'))
            ->template('architect_register')
            ->viewVars(array('hash' => $user['User']['hash']))
            ->emailFormat('html')
            ->send();
        
    }
	
    public function sendUserAdd($userId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(__('Rejestracja konta w platformie PRODUKTYOBI.PL'))
            ->template('user_add')
            ->viewVars(array('hash' => $user['User']['hash'], 'userName' => $user['User']['name']))
            ->emailFormat('html')
            ->send();
        
    }
	
	public function sendUserNew($userId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(__('Rejestracja konta w platformie PRODUKTYOBI.PL'))
            ->template('user_new')
            ->viewVars(array('hash' => $user['User']['hash'], 'userName' => $user['User']['name']))
            ->emailFormat('html')
            ->send();
        
    }
	
    public function sendUserResetPassword($userId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(self::SUBJECT_PREFIX.__('Przypomnienie hasła'))
            ->template('user_reset_password')
            ->viewVars(array('hash' => $user['User']['hash']))
            ->emailFormat('html')
            ->send();
        
    }
	
    public function sendProfileChangePassword($userId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(self::SUBJECT_PREFIX.__('Przypomnienie hasła'))
            ->template('profile_change_password')
            ->viewVars(array('hash' => $user['User']['hash']))
            ->emailFormat('html')
            ->send();
        
    }
	
	public function sendClientOrderAcceptationNotification($userId, $orderId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
		$orderModel = $this->_model('Order');
		$orderModel->recursive = -1;
		$order = $orderModel->findById($orderId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(__('Twoje zamówienie '.$order['Order']['order_number'].' oczekuje na akceptację'))
            ->template('client_order_acceptation_notification')
            ->viewVars(array('order' => $order, 'user' => $user))
            ->emailFormat('html')
            ->send();
        
    }
	
	public function sendClientOrderAcceptedNotification($userId, $orderId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
		$orderModel = $this->_model('Order');
		$orderModel->recursive = -1;
		$order = $orderModel->findById($orderId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(__('Zaakceptowałeś Twoje zamówienie '.$order['Order']['order_number']))
            ->template('client_order_accepted_notification')
            ->viewVars(array('order' => $order, 'user' => $user))
            ->emailFormat('html')
            ->send();
        
    }
	
	public function sendClientOrderRefusedNotification($userId, $orderId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
		$orderModel = $this->_model('Order');
		$orderModel->recursive = -1;
		$order = $orderModel->findById($orderId);
		
        $email = new CakeEmail('smtp');
        $email->to(array($user['User']['email']))
            ->subject(__('Odrzuciłeś Twoje zamówienie '.$order['Order']['order_number']))
            ->template('client_order_refused_notification')
            ->viewVars(array('order' => $order, 'user' => $user))
            ->emailFormat('html')
            ->send();
        
    }
    
    public function sendAccountOrderAcceptedNotification($userId, $orderId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
        $adminsEmails = $this->_getAdminsEmails();
        
		$orderModel = $this->_model('Order');
		$orderModel->recursive = -1;
		$order = $orderModel->findById($orderId);
		
        $email = new CakeEmail('smtp');
        $email->to($adminsEmails)
            ->subject(__('Zamówienie '.$order['Order']['order_number'].' zostało zaakceptowane przez Klienta'))
            ->template('account_order_accepted_notification')
            ->viewVars(array('order' => $order, 'user' => $user))
            ->emailFormat('html')
            ->send();
        
    }
    
    public function sendAccountOrderRefusedNotification($userId, $orderId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($userId);
		
        $adminsEmails = $this->_getAdminsEmails();
        
		$orderModel = $this->_model('Order');
		$orderModel->recursive = -1;
		$order = $orderModel->findById($orderId);
		
        $email = new CakeEmail('smtp');
        $email->to($adminsEmails)
            ->subject(__('Zamówienie '.$order['Order']['order_number'].' zostało odrzucone przez Klienta'))
            ->template('account_order_refused_notification')
            ->viewVars(array('order' => $order, 'user' => $user))
            ->emailFormat('html')
            ->send();
        
    }
    
    public function notificateAdminsAboutNewUser($newUserId) {
        
		$userModel = $this->_model('User');
		$userModel->recursive = -1;
		$user = $userModel->findById($newUserId);
        
        $adminsEmails = $this->_getAdminsEmails();
		
        $email = new CakeEmail('smtp');
        $email->to($adminsEmails)
            ->subject(__('Nowy użytkownik zarejestrował się w Content Pro'))
            ->template('admin_notification_new_user')
            ->viewVars(array('user' => $user))
            ->emailFormat('html')
            ->send();
        
    }
    
    public function notificateAccountAboutNewProject($projectId) {
        
        $projectModel = $this->_model('Project');
		$userModel = $this->_model('User');
        $project = $projectModel->findById($projectId);
        
        if ($project) {
            $account = $userModel->findById($project['Project']['account_manager_id']);
            
            if ($account) {
                $email = new CakeEmail('smtp');
                $email->to(array($account['User']['email']))
                    ->subject(__('Account manager projektu został zmieniony w Content Pro'))
                    ->template('account_notification_account_manager_change')
                    ->viewVars(array('project' => $project))
                    ->emailFormat('html')
                    ->send();
            }
        }
        
    }
    
    public function notificateAdminsAboutNewProject($projectId) {
        
        $projectModel = $this->_model('Project');
		$userModel = $this->_model('User');
        $project = $projectModel->findById($projectId);
        
        $adminsEmails = $this->_getAdminsEmails();
        
        if ($project) {
            $client = $userModel->findById($project['Project']['user_id']);
            
            if ($client) {
                $email = new CakeEmail('smtp');
                $email->to($adminsEmails)
                    ->subject(__('Został utworzony nowy projekt w Content Pro'))
                    ->template('admin_notification_new_project')
                    ->viewVars(array('project' => $project, 'client' => $client))
                    ->emailFormat('html')
                    ->send();
            }
        }
        
    }
	
	public function notificateAuthorAboutNewOrder($orderId, $authorId) {
        
        $orderModel = $this->_model('Order');
		$userModel = $this->_model('User');
        $order = $orderModel->findById($orderId);
		$user = $userModel->findById($authorId);
        
        if ($user && $order) {
			$email = new CakeEmail('smtp');
			$email->to(array($user['User']['email']))
				->subject(__('Aktualizacja informacji o zamówieniu '.$order['Order']['order_number'].' w którym bierzesz udział'))
				->template('author_notification_new_order')
				->viewVars(array('order' => $order))
				->emailFormat('html')
				->send();
        }
        
    }
	
	public function sendNotificationEmail($emailAddress, $emailSubject, $emailContent) {
		
		if ($emailAddress && $emailContent) {
			
			$email = new CakeEmail('smtp');
			$email->to(array($emailAddress))
				->subject($emailSubject)
				->template('cron_event_notification')
				->viewVars(array('content' => $emailContent))
				->emailFormat('html')
				->send();
			
		}
		
	}
	
	protected function _model($name) {
		
		App::import('Model', $name);
		return new $name();
		
	}
    
    protected function _getAdminsEmails() {
        
		$userModel = $this->_model('User');
        $admins = $userModel->getAllUsersWithRoleId('all', array(1, 2));
        
        $adminsEmails = [];
        foreach ($admins as $admin) {
            $adminsEmails[] = $admin['User']['email'];
        }
        
        return $adminsEmails;
        
    }
    
}
    