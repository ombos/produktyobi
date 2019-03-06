<?php

class RdsTime {
    
    public function fromStringToMicro($dateString) {
        
        return strtotime($dateString).'000';
        
    }
    
    public function toMysqlFormat($dateString) {
        
        if (is_numeric($dateString)) return date('Y-m-d H:i:s', $dateString);
        return date('Y-m-d H:i:s', strtotime($dateString));
        
    }
    
}
