<div class="navigation clearfix">
	<?php 
	echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Dodaj użytkownika').'</span>',
	array('controller' => 'users', 'action' => 'add'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('users', 'add')
	)); 

	echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Lista użytkowników').'</span>',
	array('controller' => 'users', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('users', 'index')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-history"></i><span>'.__('Logi użytkowników').'</span>',
	array('controller' => 'users', 'action' => 'history'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('users', 'history')
	)); 
	
	?>
</div>