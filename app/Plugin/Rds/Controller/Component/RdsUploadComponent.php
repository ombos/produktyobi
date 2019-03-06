<?php

App::uses('Component', 'Controller');
App::uses('Inflector', 'Utility');

class RdsUploadComponent extends Component {
    
    protected $_controller;
    protected $_fileNameLength = 10;
    protected $_fileUniqueKeyLength = 4;
    protected $_uploadPath;
	protected $_relativeUploadPath;
    
    protected $_fileTypesExtensionMap = array(
        'image' => array(
            'jpg',
            'jpeg',
            'png',
            'gif',
        ),
        'pdf' => array(
            'pdf'
        ),
        'doc' => array(
            'doc',
            'docx',
            'odt'
        ),
        'xls' => array(
            'xls',
            'xlsx',
            'cvs'
        ),
        'text' => array(
            'txt',
            'ini'
        ),
        'code' => array(
            'html',
            'htm',
            'ctp',
            'php',
            'js',
            'css',
            'less'
        ),
    );
    
    public function initialize(Controller $controller) {
        
        $this->_controller = $controller;
        $this->_uploadPath = APP.WEBROOT_DIR.DS.'upload'.DS;
		$this->_relativeUploadPath = 'upload'.DS;
        parent::initialize($controller);
        
    }
    
    public function setUploadPath($path) {
        
        $this->_uploadPath = APP.WEBROOT_DIR.DS.$path;
		$this->_relativeUploadPath = $path;
        
    }
    
    public function getUploadPath() {
        
        return $this->_uploadPath;
        
    }
    
    public function getRelativeUploadPath() {
        
        return $this->_relativeUploadPath;
        
    }
	
    public function isUploadedFile($file) {
        
        return is_uploaded_file($file['tmp_name']);
        
    }
    
    public function saveFile($file, $preserveFileName = false, $desiredFileName = null) {
        
        if (is_uploaded_file($file['tmp_name'])) {
            if ($desiredFileName != null) {
                $name = $desiredFileName;
            } else {
                $name = $this->_getFileName($file, $preserveFileName);
            }
            $type = $this->_getType($file);
            $mime = $this->_getMimeType($file);
			if (!file_exists($this->_uploadPath)) mkdir($this->_uploadPath, 0777, true);
            if (move_uploaded_file($file['tmp_name'], $this->_uploadPath.$name)) {
                return array(
                    'name' => $name,
                    'size' => $file['size'],
                    'type' => $type,
                    'mime' => $mime,
                );
            } return false;
        } else return false;
        
    }
    
    public function deleteFile($fileName) {
        
        if (file_exists($this->_uploadPath.$fileName)) {
            return unlink($this->_uploadPath.$fileName);
        } else {
            return false;
        }
        
    }
    
    protected function _getType($file) {
        
        $extension = $this->_getExtension($file);
        
        foreach($this->_fileTypesExtensionMap as $fileType => $extensionsList) {
            if (in_array($extension, $extensionsList)) return $fileType;
        }
        
        return 'unknown';
        
    }
    
    protected function _getFileName($file, $preserveFileName = false) {
        
        $name = '';
        if ($preserveFileName) {
            $name = Inflector::slug($this->_getPureName($file), '-').'-'.$this->_getRandomName($file, $this->_fileUniqueKeyLength);
        } else {
            $name = $this->_getRandomName($file, $this->_fileNameLength);
        }
        return $name.'.'.$this->_getExtension($file);
        
    }
    
    protected function _getRandomName($file, $length) {
        
        return substr(md5($file['tmp_name'].$file['name'].time().$length), 0, $length);
        
    }
    
    protected function _getMimeType($file) {
        
        $fileInfo = new finfo(FILEINFO_MIME);
        $mime = $fileInfo->file($file['tmp_name']);
        $ex = explode(';', $mime);
        return isset($ex[0]) ? $ex[0] : null;
        
    }
    
    protected function _getExtension($file) {
        
        return pathinfo($file['name'], PATHINFO_EXTENSION);
        
    }
    
    protected function _getPureName($file) {
        
        $pathInfo = pathinfo($file['name']);
        return str_replace('.'.$pathInfo['extension'], '', $pathInfo['basename']);
        
    }
    
}
    