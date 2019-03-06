<div class="navigation clearfix">
	<?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Add access account'), array('controller' => 'access_accounts', 'action' => 'add'),
			array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Access account list'), array('controller' => 'access_accounts', 'action' => 'index'),
			array('escape' => false)); ?>
</div>