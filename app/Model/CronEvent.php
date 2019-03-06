<?php
App::uses('AppModel', 'Model');

class CronEvent extends AppModel {
	
	public $belongsTo = array(
		'CronEventInterval'
	);
	public $hasOne = array(
		'CronEventModule',
		'CronEventContent'
	);
	public $hasMany = array(
		'CronEventReceiver',
		'CronEventNotification',
		'CronEventSentNotification'
	);
	
	public function __construct() {
		
		parent::__construct();
		$this->validationSets = array(
			array()
		);
		
	}
	
}
