<div class="navigation clearfix">
	<?php 
	echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Dodaj kategorię').'</span>',
	array('controller' => 'categories', 'action' => 'add'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('categories', 'add')
	)); 

	echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Lista kategorii').'</span>',
	array('controller' => 'categories', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('categories', 'index')
	)); 
	
	?>
</div>