<?php
App::uses('Controller', 'Controller');
App::import('Lib', 'Rds.RdsRequest');
App::import('Lib', 'Rds.RdsResponse');
App::import('Lib', 'Rds.RdsTime');

class RdsController extends Controller {
	
    public $rdsResponse;
    
	protected $_ruleSet;
    protected $_returnRdsResponse = false;
	
	public function beforeFilter() {
		
		parent::beforeFilter();
        
        if (strpos($this->action, 'validate_') === 0 && !method_exists($this, $this->action)) {
            $this->Auth->allow('default_validate');
            $this->Security->addUnlockedActions('default_validate');
            $this->_ruleSet = substr($this->action, strlen('validate_'));
            $this->setAction('default_validate');
        }
        
        if ($this->request->header('RdsRequest') == true && method_exists($this, $this->action)) {
            if ($this->request->is('post')) {
                $contentType = RdsRequest::DATA_TYPE_JSON;
                if (strpos($_SERVER['CONTENT_TYPE'], 'multipart/form-data') !== false) $contentType = RdsRequest::DATA_TYPE_FORM_DATA;
                $this->request->data = RdsRequest::transformRequest($this, $contentType);
            }
            $this->autoRender = false;
            $this->rdsResponse = new RdsResponse();
            $this->_returnRdsResponse = true;
        }
		
	}
    
    public function afterFilter() {
        
        parent::afterFilter();
        
        if ($this->_returnRdsResponse) {
            return $this->rdsResponse->returnResponse($this);
        }
        
    }
	
	public function default_validate() {
		
		$this->request->data = RdsRequest::transformRequest($this);
		$this->autoRender = false;
		$model = $this->{$this->modelClass};
		$model->useValidationSet($this->_ruleSet);
		$this->rdsResponse = new RdsResponse($this->RdsValidation->validate($model, $this->request->data['data']));
		return $this->rdsResponse->returnResponse($this);
		
	}
	
}
