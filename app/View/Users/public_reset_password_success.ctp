<div class="public_login_main">	
	<div class="users public_login">
		<?php 
			echo $this->Html->link($this->Html->image('layout/obi_logo.png', array('class' => 'logo')), array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); 
		?>
		<h1><?php echo __('Hasło zostało zmienione'); ?></h1>
		<p>Kliknij <?php echo $this->Html->link('tutaj', array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); ?>, aby się zalogować do platformy.</p>
	</div>
</div>