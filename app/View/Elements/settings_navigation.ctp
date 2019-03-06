<div class="navigation clearfix">
	<?php 
	echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Zarządzanie systemem').'</span>',
	array('controller' => 'settings', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('settings', 'index')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-cogs"></i><span>'.__('Zarządzanie typami zamówień').'</span>',
	array('controller' => 'system_order_elements', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('system_order_elements', 'index')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-cogs"></i><span>'.__('Zarządzanie uprawnieniami').'</span>',
	array('controller' => 'user_roles', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('user_roles', 'index')
	)); 
	
	/*echo $this->Authorize->link('<i class="fa fa-cogs"></i><span>'.__('Zarządzanie korektorami').'</span>',
	array('controller' => 'users', 'action' => 'index_correctors'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('users', 'index_correctors')
	)); 
	*/
	echo $this->Authorize->link('<i class="fa fa-money"></i><span>'.__('Zarządzanie cennikami').'</span>',
	array('controller' => 'system_pricelists', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('system_pricelists', 'index')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-money"></i><span>'.__('Zarządzanie stałymi cenami').'</span>',
	array('controller' => 'system_prices', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('system_prices', 'index')
	)); 
	
	?>
</div>