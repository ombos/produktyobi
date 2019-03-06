<div class="navigation clearfix">
	<?php 
	/*echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Lista serwisów').'</span>',
	array('controller' => 'users', 'action' => 'edit_worker', $userID),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('users', 'edit_worker')
	)); */
	
	 if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,3))) {
		$actionEdit = 'edit';
	 } else {
		$actionEdit = 'edit_worker';
	 }
	
	?>
	
	<a href="/s/users/<?php echo $actionEdit; ?>/<?php echo $userID; ?>#services" target="_self"><i class="fa fa-bars"></i><span>Lista serwisów</span></a>
	
	<?php 
	echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Dodaj nowy serwis').'</span>',
	array('controller' => 'publisher_website_offers', 'action' => 'add', $userID),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('publisher_websites', 'add')
	)); 
	?>
</div>