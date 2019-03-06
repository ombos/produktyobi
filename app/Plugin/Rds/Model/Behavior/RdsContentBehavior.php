<?php
App::uses('ModelBehavior', 'Model');

/**
 * Rds Content Behavior
 * 
 * Searches given model fields for links and sets 'target' attribute (if it doesn't exist) to '_self'. Needed for AngularJS HTML5 mode
 */
class RdsContentBehavior extends ModelBehavior {
	
	protected $_fields = array();
	protected $_fixLinkTarget = true;
	
	public function setup(Model $model, $config = array()) {
		
		if (isset($config['fields'])) $this->_fields = $config['fields'];
		
		parent::setup($model, $config);
		
	}
	
	public function fixLinkTarget(Model $model, $value = null) {
		
		if ($value === null) return $this->_fixLinkTarget;
		else $this->_fixLinkTarget = $value;
		
	}
	
	public function afterFind(Model $model, $results, $primary = false) {
		
		foreach ($results as &$result) {
			foreach ($this->_fields as $field) {
				if (isset($result['News'][$field])) {
					$content = $result['News'][$field];
					
					if ($this->_fixLinkTarget) {
						$content = preg_replace_callback('/<a (.*?)>/i', function($matches) {
							$value = $matches[0];
							if (strpos($value, 'target=') === false) $value = preg_replace('/>/', ' target="_self">', $value);
							return $value;
						}, $content);
					}
					
					$result['News'][$field] = $content;
				}
			}
		}
		
		return $results;
		
	}
	
}
