<div class="users public_register_success">
	<div class="alert alert-success">
		<?php echo __('Konto zostało utworzone !'); ?>
		<?php echo $this->Html->link(__('Możesz teraz się zalogować, klikając tutaj'), array('controller' => 'users', 'action' => 'public_login')); ?>
	</div>
</div>