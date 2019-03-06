<?php

App::uses('Component', 'Controller');

class MoneyComponent extends Component {
    
    protected $_controller;
    
    public function initialize(Controller $controller) {
        
        $this->_controller = $controller;
        
    }

	protected $slowa = Array(
	  'minus',
	
	  Array(
	    'zero',
	    'jeden',
	    'dwa',
	    'trzy',
	    'cztery',
	    'pięć',
	    'sześć',
	    'siedem',
	    'osiem',
	    'dziewięć'),
	
	  Array(
	    'dziesięć',
	    'jedenaście',
	    'dwanaście',
	    'trzynaście',
	    'czternaście',
	    'piętnaście',
	    'szesnaście',
	    'siedemnaście',
	    'osiemnaście',
	    'dziewiętnaście'),
	
	  Array(
	    'dziesięć',
	    'dwadzieścia',
	    'trzydzieści',
	    'czterdzieści',
	    'pięćdziesiąt',
	    'sześćdziesiąt',
	    'siedemdziesiąt',
	    'osiemdziesiąt',
	    'dziewięćdziesiąt'),
	
	  Array(
	    'sto',
	    'dwieście',
	    'trzysta',
	    'czterysta',
	    'pięćset',
	    'sześćset',
	    'siedemset',
	    'osiemset',
	    'dziewięćset'),
	
	  Array(
	    'tysiąc',
	    'tysiące',
	    'tysięcy'),
	
	  Array(
	    'milion',
	    'miliony',
	    'milionów'),
	
	  Array(
	    'miliard',
	    'miliardy',
	    'miliardów'),
	
	  Array(
	    'bilion',
	    'biliony',
	    'bilionów'),
	
	  Array(
	    'biliard',
	    'biliardy',
	    'biliardów'),
	
	  Array(
	    'trylion',
	    'tryliony',
	    'trylionów'),
	
	  Array(
	    'tryliard',
	    'tryliardy',
	    'tryliardów'),
	
	  Array(
	    'kwadrylion',
	    'kwadryliony',
	    'kwadrylionów'),
	
	  Array(
	    'kwintylion',
	    'kwintyliony',
	    'kwintylionów'),
	
	  Array(
	    'sekstylion',
	    'sekstyliony',
	    'sekstylionów'),
	
	  Array(
	    'septylion',
	    'septyliony',
	    'septylionów'),
	
	  Array(
	    'oktylion',
	    'oktyliony',
	    'oktylionów'),
	
	  Array(
	    'nonylion',
	    'nonyliony',
	    'nonylionów'),
	
	  Array(
	    'decylion',
	    'decyliony',
	    'decylionów')
	);
	
	protected function odmiana($odmiany, $int){ // $odmiany = Array('jeden','dwa','pięć')
	  $txt = $odmiany[2];
	  if ($int == 1) $txt = $odmiany[0];
	  $jednosci = (int) substr($int,-1);
	  $reszta = $int % 100;
	  if (($jednosci > 1 && $jednosci < 5) &! ($reszta > 10 && $reszta < 20))
	    $txt = $odmiany[1];
	  return $txt;
	}
	
	protected function liczba($int){ // odmiana dla liczb < 1000
	  
	  $wynik = '';
	  $j = abs((int) $int);
	
	  if ($j == 0) return $this->slowa[1][0];
	  $jednosci = $j % 10;
	  $dziesiatki = ($j % 100 - $jednosci) / 10;
	  $setki = ($j - $dziesiatki*10 - $jednosci) / 100;
	
	  if ($setki > 0) $wynik .= $this->slowa[4][$setki-1].' ';
	
	  if ($dziesiatki > 0)
	        if ($dziesiatki == 1) $wynik .= $this->slowa[2][$jednosci].' ';
	  else
	    $wynik .= $this->slowa[3][$dziesiatki-1].' ';
	
	  if ($jednosci > 0 && $dziesiatki != 1) $wynik .= $this->slowa[1][$jednosci].' ';
	  return $wynik;
	}
	
	protected function slownie($int){
	
	 
	
	  $in = preg_replace('/[^-\d]+/','',$int);
	  $out = '';
	
	  if ($in{0} == '-'){
	    $in = substr($in, 1);
	    $out = $this->slowa[0].' ';
	  }
	
	  $txt = str_split(strrev($in), 3);
	
	  if ($in == 0) $out = $this->slowa[1][0].' ';
	
	  for ($i = count($txt) - 1; $i >= 0; $i--){
	    $liczba = (int) strrev($txt[$i]);
	    if ($liczba > 0)
	      if ($i == 0)
	        $out .= $this->liczba($liczba).' ';
	          else
	        $out .= ($liczba > 1 ? $this->liczba($liczba).' ' : '')
	          .$this->odmiana( $this->slowa[4 + $i], $liczba).' ';
	  }
	  return trim($out);
	}
	public function kwotaslownie($kwota){
	  $kwota = explode('.', $kwota);
	 
	  $zl = preg_replace('/[^-\d]+/','', $kwota[0]);
	  $gr = preg_replace('/[^\d]+/','', substr(isset($kwota[1]) ? $kwota[1] : 0, 0, 2));
	  while(strlen($gr) < 2) $gr .= '0';
	
	  return $this->slownie($zl) . ' ' . $this->odmiana(Array('złoty', 'złote', 'złotych'), $zl) .
	      (intval($gr) == 0 ? '' :
	      ' ' . $this->slownie($gr) . ' ' . $this->odmiana(Array('grosz', 'grosze', 'groszy'), $gr));
	}
	
    
}

?>