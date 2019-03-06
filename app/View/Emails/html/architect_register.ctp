<h1><?php echo __('You have been registered successfully'); ?></h1>
<p><?php echo __('To activate your account click the link below:'); ?></p>
<p><?php echo $this->Html->link(Router::url(array('controller' => 'architects', 'action' => 'public_activate', $hash), true)); ?></p>