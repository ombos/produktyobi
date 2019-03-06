<?php
App::uses('AppController', 'Controller');

class CronController extends AppController {
	
	public $uses = array(
		'CronEvent',
		'CronEventInterval',
		'CronEventModule',
		'CronEventContent',
		'CronEventReceiver',
		'CronEventNotification',
		'CronEventSentNotification',
		'User'
	);
	public $components = array();
	public $helpers = array();

	public function beforeFilter() {
		
		parent::beforeFilter();
		$this->Security->addUnlockedActions();
		
	}

	public function public_index() {
		
		$this->autoRender = false;
		$this->__includeEventClasses();
		
		$eventLinkArray = array(
			3 => '/products/p/',
			4 => '/products/p/',
			5 => '/products/p/',
			6 => '/products/p/',
			7 => '/products/p/',
			8 => '/products/p/',

		);
		
		$notifications = $this->CronEventNotification->find('all', array(
			'recursive' => 2,
			'conditions' => array(
				'CronEventNotification.is_notified' => 0
			)
		));
		
		$emails = array();
		
		foreach ($notifications as $notification) {
		
			$userID = $notification['CronEventNotification']['user_id'];
			$eventID = $notification['CronEventNotification']['cron_event_id'];
			$eventClass = new $notification['CronEvent']['CronEventModule']['class_name'];
			$toTemplate = $eventClass->_toTemplate($notification['CronEventNotification']['json_data']);

			$decodedJSON = json_decode($notification['CronEventNotification']['json_data']);
			
			$elementLink = '';
			$elementLink.='https://produktyobi.pl';
			$elementLink.=$eventLinkArray[$eventID];
			$elementLink.=$decodedJSON->elementID;
			
			$emails[$userID][$eventID][$decodedJSON->elementID] = array(
				'text' => $toTemplate,
				'link' => $elementLink
			);
			
			$this->__updateNotification($notification['CronEventNotification']['id']);
			$this->__eventSentNotification($notification['CronEventNotification']['id']);
			
		}
		
		$emailContent = ''; 
		
		foreach ($emails as $emailKey => $email) {
			
			$emailUser = $this->__getUserNotification($emailKey);
			
			foreach ($email as $eventKey => $eventValue) {
				
				$count = count($email[$eventKey]);
				
				$emailContent.= '<h2>'.$emailUser['name'].' ('.$emailUser['email'].')</h2>';
				$emailContent.= '<h3><span style="width:30px;color: #ff0033; display: block; float: left">'.$count.'</span> - '.$this->__getEventHeader($eventKey).'</h3>';
				
				foreach ($eventValue as $eventContent) {
					$emailContent.=$eventContent['text'];
					$emailContent.='<a href="'.$eventContent['link'].'" style="text-decoration: none; font-size:12px;color: #ff0033; float: right; display: block; margin-top: -30px"> &raquo; Zobacz &laquo;</a>';
					$emailContent.='<br/>';
				}
			}
			
			
			//debug($emailContent);
			//debug('----- ------ ------- -------');
			
			//if ($emailAddress == 'bk@rds-group.pl') {
				//$this->Email->sendNotificationEmail('michal.jankowski@obi.pl', 'Powiadomienia z platformy produktyobi.pl', $emailContent);
				//$this->Email->sendNotificationEmail('support@accesspro.pl', 'Powiadomienia z platformy produktyobi.pl', $emailContent);
			//}
			
		}
		
		//debug($emailContent);
		//debug('----- ------ ------- -------');
		$this->Email->sendNotificationEmail('support@accesspro.pl', 'Powiadomienia z platformy produktyobi.pl', $emailContent);
		$this->Email->sendNotificationEmail('michal.jankowski@obi.pl', 'Powiadomienia z platformy produktyobi.pl', $emailContent);
		$this->Email->sendNotificationEmail('hanna.baka@obi.pl', 'Powiadomienia z platformy produktyobi.pl', $emailContent);
		$this->Email->sendNotificationEmail('Pawel.Biernacki@obi.pl', 'Powiadomienia z platformy produktyobi.pl', $emailContent);
		
	}
	
	protected function __includeEventClasses() {
		
		include_once('../Model/Notifications/NotificationUserRegister.php');
		include_once('../Model/Notifications/NotificationNewCategory.php');
		include_once('../Model/Notifications/NotificationNewProduct.php');
		include_once('../Model/Notifications/NotificationProductEdit.php');
		include_once('../Model/Notifications/NotificationNewMark.php');
		include_once('../Model/Notifications/NotificationNewProducer.php');
		include_once('../Model/Notifications/NotificationMarkEdit.php');
		include_once('../Model/Notifications/NotificationProducerEdit.php');
		include_once('../Model/Notifications/NotificationForeignOrder.php');
		include_once('../Model/Notifications/NotificationProductImport.php');
		include_once('../Model/Notifications/NotificationMediaImport.php');
		include_once('../Model/Notifications/NotificationProductExport.php');
		
	}
	
	protected function __getEventHeader($eventID) {
		
		if ($eventID) {
			
			$header = $this->CronEventContent->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'cron_event_id' => $eventID
				),
				'fields' => array(
					'title'
				)
			));
			
			if ($header) {
				return $header['CronEventContent']['title'];
			} else {
				return FALSE;
			}
			
		}
		
	}
	
	protected function __getUserNotification($userID) {
		
		if ($userID) {
			
			$user = $this->User->find('first', array(
				'recursive' => -1,
				'conditions' => array(
					'id' => $userID
				)
			));
			
			if ($user) {
				return $user['User'];
			} else {
				return FALSE;
			}
			
		}
		
	}
	
	protected function __updateNotification($notificationID) {
		
		if ($notificationID) {
				
			$notificationArray	= array(
				'id' => $notificationID,
				'is_notified' => 1
			);
				
			$this->CronEventNotification->save($notificationArray);	
				
		}
		
	}
	
	protected function __eventSentNotification($eventID) {
		
		if ($eventID) {
			
			$eventArray = array(
				'cron_event_id' => $eventID
			);
			$this->CronEventSentNotification->create();
			$this->CronEventSentNotification->save($eventArray);
			
		}
		
	}
	
}
