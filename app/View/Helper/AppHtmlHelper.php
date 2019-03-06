<?php
App::uses('RdsHtmlHelper', 'Rds.View/Helper');

class AppHtmlHelper extends RdsHtmlHelper {
	
	public function image($path, $options = array()) {
		
		$language = Configure::read('Config.language');
		$languagePath = preg_replace('/(\.jpg$|\.png$)/', '_'.$language.'$1', $path);
		
		if (file_exists('img/'.$languagePath)) {
			$path = $languagePath;
		}
		
		return parent::image($path, $options);
		
	}
	
}
