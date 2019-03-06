<div class="public_login_main">	
	<div class="users public_login">
		<?php 
			echo $this->Html->link($this->Html->image('layout/obi_logo.png', array('class' => 'logo')), array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); 
		?>
		<h1><?php echo __('Przypomnienie hasła'); ?></h1>
		<p>Jeśli nie pamiętasz hasła do swojego konta, podaj nam swój adres email, a wyślemy Ci nowe.</p>
		<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
			<?php echo $this->Form->create('User', array(
				'ajax' => true,
				'validationUrl' => 'users/validate_public_reset_password',
				'submit' => 'message = null; loading = true',
				'success' => 'Util.redirect(response.data.redirect)',
				'error' => 'message = response.errors; loading = false',
				'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
			)); ?>
			<?php echo $this->Form->input('email', array('label' => false, 'placeholder' => __('Adres email'))); ?>
			<?php echo $this->Form->submit(__('Wyślij nowe hasło'), array('class' => 'btn btn-success submitRDS')); ?>
			<?php echo $this->Form->end(); ?>
		</div>
	</div>
</div>
