<?php
App::uses('Component', 'Controller');
App::uses('UserLog', 'Model');

class UserTrackComponent extends Component {
    
    protected $UserLog;
	
	public function initialize(Controller $controller) {
	    
        $this->UserLog = new UserLog();
        
	}
	
	public function track($userID, $data, $controller, $action) {
		
		$controllerTranslate = array(
			'categories' => ' kategorię',
			'pages' => ' podstrony',
			'products' => ' produkt',
			'profile' => ' profil',
			'users' => ' konto użytkownika',
		);
		
		$actionTranslate = array(
			'add' => 'Utworzono',
			'edit' => 'Zaktualizowano',
			'mark_add' => 'Utworzono markę',
			'mark_edit' => 'Zaktualizowano markę',
			'producer_add' => 'Utworzono producenta',
			'producer_edit' => 'Zaktualizowano producenta',
			'import_products' => 'Zaimportowano produkty przez importer',
			'import_media' => 'Zaimportowano media przez importer',
			'export_products' => 'Wyeksportowano produkty',
			'external' => 'Złożono zamówienie w platformie Content Pro',
			'change_password' => 'Zmieniono hasło'
		);
		
		$trackMessage = '';
		
		if (isset($actionTranslate[$action])) {
			
			$trackMessage.= $actionTranslate[$action];
		
			if ($action == 'add' || $action == 'edit') {
				if (isset($controllerTranslate[$controller])) {
					$trackMessage.= $controllerTranslate[$controller];
				}
			}
			
			if (!empty($data)) {
				
				foreach ($data as $key => $value) {
					if (is_array($value) && !empty($value)) {
						
						$trackMessage.= '<br/><br/> Szczegóły: <br/>';
						
						foreach ($value as $detKey => $detVal) {
							
							if ($detKey != 'key' && $detKey != 'fields' && $detKey != 'unlocked' && $detKey != 'new_password' && $detKey != 'new_password2') {
								if (!is_array($detVal)) {
									$trackMessage.= '- '.$detKey .': '.strip_tags($detVal).'<br/>';
								} else {
									foreach ($detVal as $detKey2 => $detVal2) {
										
										if ($detKey2 != 'key' && $detKey2 != 'fields' && $detKey2 != 'unlocked'  && $detKey != 'new_password' && $detKey != 'new_password2') {
											if (!is_array($detVal2)) {
												$trackMessage.= '- '.$detKey2 .': '.strip_tags($detVal2).'<br/>';
											}
										}
									}
								}
									
							}
						}
					}
				}
			}
			
			if (!empty($trackMessage)) {
				$userLogData = array(
					'user_id' => $userID,
					'action_name' => $trackMessage
				);
				$this->UserLog->save($userLogData);
			}
		}	
	}
	
}
    