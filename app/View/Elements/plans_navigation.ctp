<div class="navigation clearfix">
	<?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Add plan').'</span>', array('controller' => 'plans', 'action' => 'add'), array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Plan list').'</span>', array('controller' => 'plans', 'action' => 'index'), array('escape' => false)); ?>
</div>