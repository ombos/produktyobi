<?php

App::uses('AuthComponent', 'Component');

class AppErrorHandler extends ErrorHandler {
    
    public static function handleException(Exception $exception) {
        parent::handleException($exception);
    }
    
    public static function handleError($code, $description, $file = null, $line = null, $context = null) {
        if (error_reporting() === 0) {
            return false;
        }
        $errorConfig = Configure::read('Error');
        list($error, $log) = self::mapErrorCode($code);
        if ($log === LOG_ERR) {
            return self::handleFatalError($code, $description, $file, $line);
        }

        $debug = Configure::read('debug');
        if ($debug) {
            $data = array(
                'level' => $log,
                'code' => $code,
                'error' => $error,
                'description' => $description,
                'file' => $file,
                'line' => $line,
                'context' => $context,
                'start' => 2,
                'path' => Debugger::trimPath($file)
            );
            echo Debugger::getInstance()->outputError($data);
        }
        $message = $error . ' (' . $code . '): ' . $description . ' in [' . $file . ', line ' . $line . ']';
        if (!empty($errorConfig['user'])) {
            $user = AuthComponent::user();
            $message .= "\nUser:\n" . json_encode($user, JSON_PRETTY_PRINT);
        }
        if (!empty($errorConfig['browser'])) {
            $message .= "\nBrowser:\n" . $_SERVER['HTTP_USER_AGENT'];
        }
        if (!empty($errorConfig['trace'])) {
            $trace = Debugger::trace(array('start' => 1, 'format' => 'log'));
            $message .= "\nTrace:\n" . $trace . "\n";
        }
        return CakeLog::write($log, $message);
    }

    public static function mapErrorCode($code) {
        $error = $log = null;
        switch ($code) {
            case E_PARSE:
            case E_ERROR:
            case E_CORE_ERROR:
            case E_COMPILE_ERROR:
            case E_USER_ERROR:
                $error = 'Fatal Error';
                $log = LOG_ERR;
                break;
            case E_WARNING:
            case E_USER_WARNING:
            case E_COMPILE_WARNING:
            case E_RECOVERABLE_ERROR:
                $error = 'Warning';
                $log = LOG_WARNING;
                break;
            case E_NOTICE:
            case E_USER_NOTICE:
                $error = 'Notice';
                $log = LOG_NOTICE;
                break;
            case E_STRICT:
                $error = 'Strict';
                $log = LOG_NOTICE;
                break;
            case E_DEPRECATED:
            case E_USER_DEPRECATED:
                $error = 'Deprecated';
                $log = LOG_NOTICE;
                break;
        }
        return array($error, $log);
    }

}