<div class="public_login_main">	
	<div class="users public_login">
		<?php 
			echo $this->Html->link($this->Html->image('layout/obi_logo.png', array('class' => 'logo')), array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); 
		?>

		<h1>Logowanie do platformy</h1>
		
		<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
			<?php echo $this->Form->create('User', array(
				'ajax' => true,
				'validationUrl' => 'users/validate_public_login',
				'submit' => 'message = null; loading = true',
				'success' => 'Util.redirect(response.data.redirect)',
				'error' => 'message = response.errors; loading = false',
				'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
			)); ?>
			<?php echo $this->Form->input('email', array('label' => false, 'placeholder' => 'login / email')); ?>
			<?php echo $this->Form->input('password', array('label' => false, 'placeholder' => 'Hasło')); ?>
			<?php echo $this->Form->submit(__('Zaloguj się'), array('class' => 'btn btn-success')); ?>
			<?php echo $this->Html->link(__('Zapomniałeś hasła?'), array('controller' => 'users', 'action' => 'public_reset_password'), array('class' => 'forgot_password')); ?>
			<?php echo $this->Form->end(); ?>
		</div>
	</div>
</div>