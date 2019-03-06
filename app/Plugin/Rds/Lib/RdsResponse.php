<?php

/**
 * W PRZYPADKU POSTu crossdomain PAMIĘTAĆ O UNLOCK ACTIONS!
 */
 
class RdsResponse {
	
	public $data;
	public $message;
	public $errors;
	
	public function __construct($data = null) {
		
		$this->data = $data;
		
	}
	
	public function toJSON() {
		
		return json_encode($this);
		
	}
    
    public function returnResponse(&$controller) {
        
        $controller->response->header('Access-Control-Allow-Origin', '*');
        $controller->response->type('json');
        $controller->response->body($this->toJSON());
        
    }
	
}
