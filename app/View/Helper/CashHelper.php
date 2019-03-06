<?php
App::uses('AppHelper', 'View/Helper');

class CashHelper extends AppHelper {
	
	public function format($value, $currency = 'zł') {
		return number_format($value, 2, ',', ' ').' '.$currency;
	}
    
    public function formatFloatToPercent($value) {
        $percentValue = $value * 100;
        return $percentValue.'%';
    }
	
}
