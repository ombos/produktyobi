<?php

App::uses('FormHelper', 'View/Helper');

class RdsFormHelper extends FormHelper {
	
	public $map = array(
		'float' => 'float',
		'decimal' => 'float',
		'integer' => 'integer'
	);
	protected $_idPostfix;
	protected $_formParams = array(
		'ajax',
		'dataType',
		'validationUrl',
		'submitCall',
		'submit',
		'success',
		'error',
		'fault',
		'reset',
        'unregisterInput',
	);
	protected $_inputParams = array(
		'format',
		'decimalCount',
		'decimalSeparator',
		'natural',
		'allowZero',
		'buttonLabel',
		'browseLabel',
		'maxFiles',
		'allowedExtensions',
		'fileListUrl',
		'nullDate',
        'databaseValue',
        'resetFunction',
	);
	protected $_inputNamePostfix = null;
	protected $_escapeNextUrl = true;
	
	public function create($model = null, $options = array()) {
		
		$this->_idPostfix = time();
		$options['rds-form'] = $this->_extractParamsAsJson($options, $this->_formParams);
		return parent::create($model, $options);
		
	}
	
	public function domId($options = null, $id = 'id') {	
		
		$options = parent::domId($options, $id);
		if (is_array($options)) {
			if (isset($options['id'])) $options['id'] = $options['id'].$this->_idPostfix;
			else if (isset($options['for'])) $options['for'] = $options['for'].$this->_idPostfix;
		}
		return $options;
		
	}
	
	public function input($fieldName, $options = array()) {
		
		$input = parent::input($fieldName, $options);
		$input = preg_replace('/^(<div)([^>]*?)(class=")([^"]*?)(error)(.*?)(>)(.*)$/i', '$1$2$3$4$5 has-error$6$7$8', $input);
		return $input;
		
	}
	
	public function postLink($title, $url = null, $options = array(), $confirmMessage = false) {
		
		$this->_escapeNextUrl = isset($options['escapeUrl']) ? $options['escapeUrl'] : true;
		
		$link = parent::postLink($title, $url, $options, $confirmMessage);
		
		// fix action expressions
		$isExpressions = false;
		$pattern = '/(action="[^"]*){{(.*?)}}(.*?")/i';
		while (preg_match($pattern, $link)) {
			$isExpressions = true;
			$link = preg_replace($pattern, '$1\' + $2 + \'$3', $link);
		}
		
		// wrap action in single expression
		if ($isExpressions) $link = preg_replace('/(action=")(.*?)(")/i', '$1{{\'$2\'}}$3', $link);
		
		return $link;
		
	}
	
	public function url($url = null, $full = false) {
		
		$url = parent::url($url, $full);
		$url = $this->_escapeNextUrl ? $url : urldecode($url);
		$this->_escapeNextUrl = true;
		return $url;
		
	}
	
	protected function _extractParamsAsJson(&$array, $accepted) {
		$params = array();
		foreach ($accepted as $param) {
			if (isset($array[$param])) {
				$value = $array[$param];
				if (preg_match('/Url$/', $param)) $value = $this->webroot.(substr($value, 0, 1) == '/' ? substr($value, 1) : $value);
				$params[$param] = $value;
				unset($array[$param]);
			}
		}
		return json_encode($params);
		
	}
	
	protected function _divOptions($options) {
		
		$divOptions = parent::_divOptions($options);
		
		if (isset($divOptions['class'])) {
			$classes = explode(' ', $divOptions['class']);
			if (array_search('form-group', $classes) === false) $classes[] = 'form-group';
			$divOptions['class'] = implode(' ', $classes);
		} else {
			$divOptions['class'] = 'form-group';
		}
		
		$divOptions['rds-input-'.$options['type']] = $this->_extractParamsAsJson($options, $this->_inputParams);
        
		return $divOptions;
		
	}
	
	protected function _getLabel($fieldName, $options) {
		
        if (isset($options['label']) && $options['label']) {
            if (isset($options['label']['class'])) {
                $classes = explode(' ', $options['label']['class']);
                if (array_search('control-label', $classes) === false) $classes[] = 'control-label';
                $options['label']['class'] = implode(' ', $classes);
            } elseif (isset($options['label']['text'])) {
                $options['label']['class'] = 'control-label';
            } elseif (isset($options['label'])) {
                $text = $options['label'];
                $options['label'] = array();
                $options['label']['text'] = $text;
                $options['label']['class'] = 'control-label';
            } else {
                $options['label']['class'] = 'control-label';
            }
        }
		
		$label = parent::_getLabel($fieldName, $options);
		//$label = preg_replace('/^(.*) for="[^"]*?"(.*)$/i', '$1$2', $label);
		
		return $label;
		
	}
	
	protected function _getInput($args) {
		
		$args = $this->_fixInputArgs($args);
		
		switch ($args['type']) {
            case 'hidden':
                $args['options']['rds-input-hidden'] = '';
                break;
            case 'tel':
            case 'email':
			case 'float':
			case 'integer':
				$args['type'] = 'text';
				break;
			
			case 'date':
				$input = $this->_date($args);
				break;
			
			case 'single-image':
				$input = $this->_singleImage($args);
		        break;
            
            case 'x-file':
                $input = $this->_xFile($args);
                break;
		}
		
		return isset($input) ? $input : parent::_getInput($args);
		
	}
	
	protected function _fixInputArgs($args) {
		
		if (
			array_search($args['type'], array('checkbox', 'radio')) === false
			&& (!isset($args['options']['multiple']) || $args['options']['multiple'] != 'checkbox')
		) {
			if (isset($args['options']['class'])) {
				$classes = explode(' ', $args['options']['class']);
				if (array_search('form-control', $classes) === false) $classes[] = 'form-control';
				$args['options']['class'] = implode(' ', $classes);
			} else {
				$args['options']['class'] = 'form-control';
			}
		}
		return $args;
		
	}
	
	protected function _date($args) {
		
		unset($args['options']['accesskey']);
		$args['type'] = 'hidden';
		$this->unlockField($args['fieldName']);
		
		return ''.
			'<div class="wrapper">'.
				'<div class="display input-group" ng-click="toggle($event)">'.
					'<input type="text" class="form-control" readonly>'.
					'<span class="input-group-btn"><button class="btn btn-primary"><i class="fa fa-calendar"></i></button></span>'.
				'</div>'.
				'<div class="picker-container">'.
					'<div class="picker">'.
						'<div class="month">'.
							'<div class="previous"><button class="btn btn-primary" ng-click="changeMonth($event, false)"><i class="fa fa-chevron-left"></i></button></div>'.
							'<div class="name">{{month}} {{year}}</div>'.
							'<div class="next"><button class="btn btn-primary" ng-click="changeMonth($event, true)"><i class="fa fa-chevron-right"></i></button></div>'.
						'</div>'.
						'<table class="days">'.
							'<thead>'.
								'<tr>'.
									'<th>Pn</th>'.
									'<th>Wt</th>'.
									'<th>Śr</th>'.
									'<th>Cz</th>'.
									'<th>Pt</th>'.
									'<th>So</th>'.
									'<th>N</th>'.
								'</tr>'.
							'</thead>'.
							'<tbody></tbody>'.
						'</table>'.
					'</div>'.
				'</div>'.
			'</div>'.
			parent::_getInput($args);
		
	}
    
    protected function _singleImage($args) {
        
        $fieldNameParts = explode('.', $args['fieldName']);
        $fieldName = $this->model().'.'.array_pop($fieldNameParts);
        
        unset($args['options']['accesskey']);
        $args['type'] = 'hidden';
        $this->unlockField($fieldName);
        
        $args['fieldName'] = $fieldName.'.'.'path';
        $pathInput = parent::_getInput($args);
        
        $args['fieldName'] = $fieldName.'.'.'process';
        $processInput = parent::_getInput($args);
        
        return ''.
            '<div class="wrapper">'.
                '<div class="btn-group-vertical" ng-click="browse($event)">'.
                    '<a class="image btn"></a>'.
                    '<button class="browse btn btn-primary">{{browseLabel}}</button>'.
                '</div>'.
                '<button class="delete text-danger" ng-click="delete($event)">{{deleteLabel}}</button>'.
                $pathInput.
                $processInput.
            '</div>';
        
    }
    
    protected function _xFile($args) {
        
        $args['type'] = 'file';
        $this->unlockField($args['fieldName']);
        $input = parent::_getInput($args);
        
        return ''.
            '<div class="wrapper">'.
                '<div class="drop-zone" ng-class="{\'drag-over\': dragOver}" rds-input-x-file-drop-zone>'.
                    '<div class="caption" ng-show="showCaption">{{buttonLabel}}</div>'.
                    '<div class="preview" ng-if="previews.length > 0">'.
                        '<div class="info" ng-repeat="preview in previews">'.
                            '<div class="remove" ng-click="remove($event, preview)"><i class="fa fa-times"></i></div>'.
                            '<div class="file-name">{{preview.name}}</div>'.
                            '<div class="file-size">{{preview.size | rdsFileSize}}</div>'.
                            '<div class="file-progress">'.
                                '<div rds-progress-bar rds-progress-bar-progress="preview.progress"></div>'.
                            '</div>'.
                            '<div class="image" ng-if="preview.type == \'image\'">'.
                                '<img ng-src="{{preview.imageData}}" alt="">'.
                            '</div>'.
                            '<div class="icon" ng-if="preview.type == \'icon\'">'.
                                '<img ng-src="{{preview.iconSrc}}" alt="">'.
                            '</div>'.
                        '</div>'.
                    '</div>'.
                '</div>'.
                $input.
            '</div>';
        
    }
	
}
