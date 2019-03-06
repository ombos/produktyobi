<?php

App::import('Lib', 'Rds.RdsTime');
App::uses('TimeHelper', 'View/Helper');

class RdsTimeHelper extends TimeHelper {
    
    public function __construct(View $view, $settings = array()) {
        
        parent::__construct($view, $settings);
        
    }
    
    public function fromStringToMicro($dateString) {
        
        $rdsTime = new RdsTime();
        return $rdsTime->fromStringToMicro($dateString);
        
    }
    
    public function currentTimePolish() {
        
		$day = $this->format(
		  'w', time()
		);
		switch($day) {
			case '0' :	$day = 'Niedziela ';
						break;
			case '1' :	$day = 'Poniedziałek ' ;
						break;
			case '2' :	$day = 'Wtorek ';
						break;
			case '3' :	$day = 'Środa ';
						break;
			case '4' :	$day = 'Czwartek ';
						break;
			case '5' :	$day = 'Piątek ';
						break;
			case '6' :	$day = 'Sobota ';
						break;
		}
			
		$month = date('n');
		
		switch($month) {
			case '1' :	$month = ' stycznia, ' ;
						break;
			case '2' :	$month = ' lutego, ';
						break;
			case '3' :	$month = ' marca, ';
						break;
			case '4' :	$month = ' kwietnia, ';
						break;
			case '5' :	$month = ' maja, ';
						break;
			case '6' :	$month = ' czerwca, ';
						break;
			case '7' :	$month = ' lipca, ';
						break;
			case '8' :	$month = ' sierpnia, ';
						break;
			case '9' :	$month = ' września, ';
						break;
			case '10' :	$month = ' października, ';
						break;
			case '11' :	$month = ' listopada, ';
						break;
			case '12' :	$month = ' grudnia, ';
						break;
		}
		
		$time = $this->format(
		  'G:i', time()
		);
		
		$date = $day.date('j').$month.$time;
				
        return $date;
        
    }
	
	public function currentTimePolishShort($dayFromNow) {
        
		$day = date('w', strtotime(' +'.$dayFromNow.' day'));
		
		switch($day) {
			case '0' :	$day = 'Nd';
						break;
			case '1' :	$day = 'Pn';
						break;
			case '2' :	$day = 'Wt';
						break;
			case '3' :	$day = 'Śr';
						break;
			case '4' :	$day = 'Cz';
						break;
			case '5' :	$day = 'Pt';
						break;
			case '6' :	$day = 'Sb';
						break;
		}
			
		$month = date('n', strtotime(' +'.$dayFromNow.' day'));
		
		switch($month) {
			case '1' :	$month = ' sty' ;
						break;
			case '2' :	$month = ' lut';
						break;
			case '3' :	$month = ' mar';
						break;
			case '4' :	$month = ' kwi';
						break;
			case '5' :	$month = ' maj';
						break;
			case '6' :	$month = ' cze';
						break;
			case '7' :	$month = ' lip';
						break;
			case '8' :	$month = ' sie';
						break;
			case '9' :	$month = ' wrz';
						break;
			case '10' :	$month = ' paź';
						break;
			case '11' :	$month = ' lis';
						break;
			case '12' :	$month = ' gru';
						break;
		}
		
        return $day.'<span class="semi notranslate"><br>'.date('j', strtotime(' +'.$dayFromNow.' day')).'</span><span class="semi">'.$month.'</span>';
        
    }
    
}
