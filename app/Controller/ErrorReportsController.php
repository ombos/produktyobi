<?php
App::uses('AppController', 'Controller');
App::uses('Folder', 'Utility');
App::uses('File', 'Utility');

class ErrorReportsController extends AppController {
    
    public $uses = array(
    );

    public $components = array('SocketClient', 'Logger');
    
    protected $unrealEngineLogsPath = 'F:/UnrealEngine/Phobos/Logs/';
    
    public function beforeFilter() {
        
        parent::beforeFilter();
        $this->Security->addUnlockedActions(
			'filter_index',
			'view'
		);
        
    }
	
    public function index() {}
	public function errors_mobile() {}
	public function errors_system() {}
    
    public function errors_import() {
        
    }
    
    public function filter_errors_import() {
        
        $logFolder = new Folder($this->unrealEngineLogsPath);
        
        foreach ($logFolder->find('.*') as $fileName) {
            $file = new File($this->unrealEngineLogsPath . $fileName);
            $files[] = array(
                'name' => $file->name,
                'size' => $file->size(),
                'modified' => date('Y-m-d H:i:s', $file->lastChange()),
            );
        } 
        
        $this->rdsResponse->data['items'] = $files;
    }
    
    public function view_errors_import($fileName) {
        
        $file = new File($this->unrealEngineLogsPath . $fileName);
        
        if ($file->exists()) {
            
            $fileInfo = array(
                'name' => $file->name,
                'size' => $file->size(),
                'modified' => date('Y-m-d H:i:s', $file->lastChange()),
                'errors' => $file->read(),
            );
            
            $this->set('fileInfo', $fileInfo);
            
        } else $this->_throw404();
        
    }
    
    
    public function log_files_list() {
    }
    
    public function filter_log_files_list() {
        
        $logFolder = new Folder(APP_LOG_PATH);
        
        foreach ($logFolder->find('.*') as $fileName) {
            $file = new File(APP_LOG_PATH . $fileName);
            $files[] = array(
                'name' => $file->name,
                'size' => $file->size(),
                'modified' => date('Y-m-d H:i:s', $file->lastChange()),
            );
        } 
        
        $this->rdsResponse->data['items'] = $files;
    }
    
    public function view($fileName) {
        
        $file = new File(APP_LOG_PATH . $fileName);
        
        if ($file->exists()) {
            
            $fileInfo = array(
                'name' => $file->name,
                'size' => $file->size(),
                'modified' => date('Y-m-d H:i:s', $file->lastChange()),
                'errors' => $this->_parseLogFile($file->read()),
            );
            
            $this->set('fileInfo', $fileInfo);
            
        } else $this->_throw404();
        
    }
    
    public function view_raw($fileName) {
        
        $file = new File(APP_LOG_PATH . $fileName);
        
        if ($file->exists()) {
            $fileInfo = array(
                'name' => $file->name,
                'size' => $file->size(),
                'modified' => date('Y-m-d H:i:s', $file->lastChange()),
                'content' => $file->read(),
            );
            $this->set('fileInfo', $fileInfo);
        } else $this->_throw404();
        
    }
    
    protected function _parseLogFile($fileContent) {
       
        $errors = array();
        $errorContents = preg_split('/\n\n/', $fileContent);
        
        foreach($errorContents as $errorContent) {
            $parsedError = $this->_parseError($errorContent);
            if ($parsedError) {
                $errors[] = $parsedError;
            } 
        }
        return $errors;
        
    }
    
    protected function _parseError($errorContent) {
        
        preg_match('/^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) (.*?)\nUser:\n(.*?)\nBrowser:\n(.*?)\nTrace:\n(.*?)$/s', $errorContent, $matches);
        
        if (isset($matches[1]) && isset($matches[2]) && isset($matches[3]) && isset($matches[4]) && isset($matches[5])) {
            return array(
                'date' => $matches[1],
                'text' => $matches[2],
                'user' => json_decode($matches[3], true),
                'browser' => $matches[4],
                'trace' => $matches[5],
            );
        }
        
        return false;
        
    }
	
}
