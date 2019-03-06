<?php

App::uses('Component', 'Controller');
App::import('Lib', 'Rds.RdsTime');

class RdsTimeComponent extends Component {
    
    protected $_controller;
    protected $_rdsTime;
    
    public function initialize(Controller $controller) {
        
        $this->_controller = $controller;
        $this->_rdsTime = new RdsTime();
        
    }
    
    public function fromStringToMicro($dateString) {
        
        return $this->_rdsTime->fromStringToMicro($dateString);
        
    }
    
    public function toMysqlFormat($dateString) {
        
        return $this->_rdsTime->toMysqlFormat($dateString);
        
    }
    
}
    