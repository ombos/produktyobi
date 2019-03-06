<div class="navigation clearfix">
	<?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Create survey'), array('controller' => 'surveys', 'action' => 'add'), array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Survey list'), array('controller' => 'surveys', 'action' => 'index'), array('escape' => false)); ?>
</div>