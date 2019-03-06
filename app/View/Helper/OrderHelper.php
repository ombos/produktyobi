<?php
App::uses('AppHelper', 'View/Helper');
App::uses('Order', 'Model');
App::uses('OrderResponse', 'Model');

class OrderHelper extends AppHelper {
	
	protected $Order;
	protected $OrderResponse;
	
	public function __construct(View $View, $settings = array()) {
		
		$this->Order = new Order();
		$this->OrderResponse = new OrderResponse();
		
	}
	
	public function checkForResponse($orderId) {
		
		if ($orderId) {
			$response = $this->OrderResponse->find('all', array(
				'recursive' => -1,
				'conditions' => array(
					'order_id' => $orderId,
					'user_id' => AuthComponent::user('id')
				)
			));
			
			if ($response) return FALSE;
			else return TRUE;
			
		} else return TRUE;
		
	}
	
}
