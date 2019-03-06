<div class="navigation iconav clearfix">
	<?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Add ticket'), array('controller' => 'support_tickets', 'action' => 'add'), array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Ticket list'), array('controller' => 'support_tickets', 'action' => 'index'), array('escape' => false)); ?>
</div>