<div class="public_login_main">	
	<div class="users public_login">
		<h1><?php echo __('Ustawianie hasła'); ?></h1>
		<p>Ustaw swoje hasło do konta: </p>
		<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
			<?php echo $this->Form->create('User', array(
				'ajax' => true,
				'validationUrl' => 'users/validate_public_password',
				'submit' => 'message = null; loading = true',
				'success' => 'Util.redirect(response.data.redirect)',
				'error' => 'message = response.errors; loading = false',
				'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
			)); ?>
			<?php echo $this->Form->input('password', array('label' => false, 'placeholder' => __('Hasło'))); ?>
			<?php echo $this->Form->input('password2', array('label' => false, 'placeholder' => __('Powtórz hasło'), 'type' => 'password')); ?>
			<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success submitRDS')); ?>
			<?php echo $this->Form->end(); ?>
		</div>
	</div>
</div>
