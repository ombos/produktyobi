<div class="navigation iconav clearfix">
	<?php echo $this->Authorize->link('<i class="fa fa-plus-circle"></i><span>'.__('Dodaj projekt').'</span>',
	array('controller' => 'projects', 'action' => 'add'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('projects', 'add')
	)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Lista projektów').'</span>',
	array('controller' => 'projects', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('projects', 'index')
	)); ?>
</div>