<?php
App::uses('Component', 'Controller');

class SocketClientComponent extends Component {
    
    private $address;
    private $post;
    
    private $socket;
    private $connected;
    private $finishLoopFlag;
    
    private $debugMode;
	
	public function initialize(Controller $controller) {
	    
        $this->connected = false;
        $this->debugMode = false;
        $this->finishLoopFlag = false;
        
	}
    
    public function setup($address, $port) {
        
        $this->address = $address;
        $this->port = $port;
        
    }
    
    public function enableDebug() {
        
        $this->debugMode = true;
        
    }
    
    public function connect() {
        
        if (isset($this->address) && isset($this->port)) {
            $this->socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
            return $this->connected = socket_connect($this->socket, $this->address, $this->port);
        } else {
            return false;
        }
        
    }
    
    public function disconnect() {
        
        if (!$this->connected) return false;
        socket_close($this->socket);
        
    }
    
    public function sendMessage($message) {
        
        if (!$this->connected) return false;
            
        $success = socket_write($this->socket, $message, strlen($message));
        if ($this->debugMode) echo "sent: $message<br>";
        return !($success === false);
        
    }
    
    public function startLoop($responseActions = array(), $loopTimeout = 120) {
        
        if (!$this->connected) return false;
        
        $this->finishLoopFlag = false;
        
        @set_time_limit(0);
        $loopStartTime = time();
        
        while (true) {
            
            $readString = socket_read($this->socket, 2048, PHP_BINARY_READ);
            
            if (!empty($readString)) {
                foreach ($responseActions as $response => $action) {
                    if ($readString == $response) {
                        if ($this->debugMode) echo "response: $response<br>";
                        $action();
                        $loopStartTime = time();
                    }
                }
                if ($this->finishLoopFlag) {
                    break;
                }
            }
            
            if (time() - $loopStartTime > $loopTimeout) {
                break;
            }
            
        }
        
    }

    public function finishLoop() {
        
        $this->finishLoopFlag = true;
        
    }
    
    
	
}
    