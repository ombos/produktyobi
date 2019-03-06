<?php
App::uses('SecurityComponent', 'Controller/Component');

class RdsSecurityComponent extends SecurityComponent {
    
    protected $controller;
    
    public function initialize(Controller $controller) {
        
        $this->controller = $controller;
        
    }
    
    public function addUnlockedActions() {
        
        if (!is_array($this->unlockedActions)) $this->unlockedActions = array();
        $this->unlockedActions = array_merge($this->unlockedActions, func_get_args());
        
    }
   
}