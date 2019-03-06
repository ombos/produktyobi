<div class="navigation iconav clearfix">
	<?php echo $this->Html->link('<i class="fa fa-info"></i><span>'.__('Account details'), array('controller' => 'profile', 'action' => 'index'),
			array('escape' => false)); ?>
	<?php echo $this->Html->link('<i class="fa fa-pencil"></i><span>'.__('Edit my account'), array('controller' => 'profile', 'action' => 'user'),
			array('escape' => false)); ?>
	<?php echo $this->Html->link('<i class="fa fa-key"></i><span>'.__('Change password'), array('controller' => 'profile', 'action' => 'change_password'),
			array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-pencil"></i><span>'.__('Edit architect'), array('controller' => 'architects', 'action' => 'edit'),
			array('escape' => false)); ?>
</div>