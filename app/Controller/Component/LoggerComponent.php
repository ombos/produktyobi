<?php
App::uses('Component', 'Controller');
App::uses('Folder', 'Utility');
App::uses('File', 'Utility');
App::uses('CakeLog', 'Log');

class LoggerComponent extends Component {
    
    private $logDirectory;
    private $logFile;
    private $logFileTimeToLive;
	
	public function initialize(Controller $controller) {
	    
        $this->logDirectory = APP.DS.'Log'.DS;
        $this->logFileTimeToLive = 24 * 60 * 60;
        
	}
    
    public function logMsg($message) {
        
        if (!$this->logFile) {
            $logFileName = $this->getLogFileName();
            $this->logFile = new File($this->logDirectory.$logFileName, true, 0644);
        }
        
        $msg = date('Y.m.d-H.i.s').' '.$message.PHP_EOL;
        $this->logFile->append($msg);
        $this->logFile->close();
        CakeLog::write(4, $msg);
    }
    
    protected function getLogFileName() {
        
        $resultFileName = '';
        $logDirectoryHandle = new Folder($this->logDirectory, true, 0755);
        $files = $logDirectoryHandle->find('.*\.txt');
        
        if (count($files) > 0) {
            $latestLogFileTime = 0;
            $latestLogFileName = null;
            foreach ($files as $file) {
                $fileNameParts = explode('_', $file);
                if (isset($fileNameParts[0])) {
                    $fileTime = $this->translateTimeFormat($fileNameParts[0]);
                    if ($fileTime > $latestLogFileTime) {
                        $latestLogFileTime = $fileTime;
                        $latestLogFileName = $file;
                    }
                }
            }
            if ($latestLogFileTime + $this->logFileTimeToLive < time()) {
                $resultFileName = date('Y-m-d-H-i-s').'_log.txt';
            } else {
                $resultFileName = $latestLogFileName;
            }
        } else {
            $resultFileName = date('Y-m-d-H-i-s').'_log.txt';
        }
        
        return $resultFileName;
        
    }

    protected function translateTimeFormat($logTimeFormat) {
        
        $timeParts = explode('-', $logTimeFormat);
        $year = $timeParts[0];
        $month = $timeParts[1];
        $day = $timeParts[2];
        $hour = $timeParts[3];
        $minute = $timeParts[4];
        $second = $timeParts[5];
        
        $time = "$year-$month-$day $hour:$minute:$second";
        
        return strtotime($time);
        
    }
	
}
    