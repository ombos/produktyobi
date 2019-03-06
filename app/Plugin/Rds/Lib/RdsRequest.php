<?php

class RdsRequest {
    
    const DATA_TYPE_JSON = 0;
    const DATA_TYPE_FORM_DATA = 1;
    
    public static function transformRequest(&$controller, $dataType = self::DATA_TYPE_FORM_DATA) {
        
        return $dataType == self::DATA_TYPE_JSON ? self::objectToArray($controller->request->input('json_decode')) : $controller->request->data;
        
    }
    
    private static function objectToArray($object) {
        
        $json = json_encode($object);
        $array = json_decode($json, true);
        return $array;
        
    }
	
}
