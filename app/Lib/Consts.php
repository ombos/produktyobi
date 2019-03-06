<?php

class Consts {
	
	public static $faultMessage;
	public static $superAdminRole;
	public static $normalAdminRole;
	public static $accountManagerRole;
	public static $superCorrectorRole;
	public static $normalCorrectorRole;
	public static $blogerRole;
	public static $authorRole;
	public static $publisherRole;
	public static $clientRole;
	
	public static function init() {
		
		self::$faultMessage = __('An error has occurred!');
		
		self::$superAdminRole 				= 1;
		self::$normalAdminRole 				= 2;
		self::$accountManagerRole 		= 3;
		self::$superCorrectorRole 			= 4;
		self::$normalCorrectorRole 		= 5;
		self::$blogerRole 						= 6;
		self::$authorRole 					= 7;
		self::$publisherRole 					= 8;
		self::$clientRole 						= 9;
	}
	
}
