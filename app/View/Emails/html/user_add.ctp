<h1><?php echo __('Witaj ! '); ?></h1>
<p><?php echo __('Twoje konto zostało utworzone, aby je aktywować, kliknij w poniższy link:'); ?></p>
<p><?php echo $this->Html->link(Router::url(array('controller' => 'users', 'action' => 'public_password', $hash), true)); ?></p>