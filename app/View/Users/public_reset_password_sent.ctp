<div class="public_login_main">	
	<div class="users public_login">
		<?php 
			echo $this->Html->link($this->Html->image('layout/obi_logo.png', array('class' => 'logo')), array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); 
		?>
		<h1><?php echo __('Hasło zostało zresetowane'); ?></h1>
		<p><?php echo __('Twoje hasło zostało zresetowane i wysłane na podany adres email. Prosimy o sprawdzenie poczty.'); ?></p>
	</div>
</div>