<?php
App::uses('HtmlHelper', 'View/Helper');

class RdsHtmlHelper extends HtmlHelper {
	
	protected $_escapeNextUrl = true;
	
	public function css($path, $options = array()) {
		
		if (is_string($path) && preg_match('/\.less$/i', $path)) $options['rel'] = 'stylesheet/less';
		$css = parent::css($path, $options);
		$css = preg_replace('/(href=".*)\.less\.css(")/', '$1.less$2', $css);
		return $css;
		
	}
	
    public function link($title, $url = null, $options = array(), $confirmMessage = false) {
    	
		$this->_escapeNextUrl = isset($options['escapeUrl']) ? $options['escapeUrl'] : true;
		if (!isset($options['target'])) $options['target'] = '_self';
		
		$link = parent::link($title, $url, $options, $confirmMessage);
		
		$link = preg_replace('/onclick="(.*?)\(&quot;(.*?)&quot;\)(.*?){ (.*?) }(.*?)"/i', 'rds-confirm="$2" rds-confirm-action="$4"', $link);
		
		return $link;
		
	}
	
	public function url($url = null, $full = false) {
		
		$url = parent::url($url, $full);
		$url = $this->_escapeNextUrl ? $url : urldecode($url);
		$this->_escapeNextUrl = true;
		return $url;
		
	}
	
}
