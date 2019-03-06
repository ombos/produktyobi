<?php
App::uses('AppModel', 'Model');

class StaticContent extends AppModel {
	
	public $actsAs = array(
		'Translate' => array(
			'content'
		)
	);
	
}
