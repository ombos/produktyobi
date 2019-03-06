<?php
App::uses('AppModel', 'Model');

class UserRole extends AppModel {
	
	
	public $belongsTo = array();
	public $hasMany = array(
		'User',
	);
	
}
