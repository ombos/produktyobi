<div class="users public_reset_password_confirm" ng-init="message = '<?php echo isset($message) ? $message : null; ?>'">
	<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
		
	</div>
</div>

<div class="public_login_main">	
	<div class="users public_login">
		<?php 
			echo $this->Html->link($this->Html->image('layout/obi_logo.png', array('class' => 'logo')), array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); 
		?>
		<h1><?php echo __('Ustawianie nowego hasła'); ?></h1>
		<p>Wpisz nowe hasło a następnie wpisz je jeszcze raz, po czym kliknij przycisk "ustaw nowe hasło".</p>
		<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
			<?php if (isset($hash)): ?>
			<?php echo $this->Form->create('User', array(
				'ajax' => true,
				'validationUrl' => 'users/validate_public_reset_password_confirm',
				'submit' => 'message = null; loading = true',
				'success' => 'Util.redirect(response.data.redirect)',
				'error' => 'message = response.errors; loading = false',
				'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
			)); ?>
			<?php echo $this->Form->input('password', array('label' => __('Nowe hasło'))); ?>
			<?php echo $this->Form->input('password2', array('label' => __('Powtórz nowe hasło'), 'type' => 'password')); ?>
			<?php echo $this->Form->submit(__('Ustaw nowe hasło'), array('class' => 'btn btn-success')); ?>
			<?php echo $this->Form->end(); ?>
		<?php endif; ?>
		</div>
	</div>
</div>