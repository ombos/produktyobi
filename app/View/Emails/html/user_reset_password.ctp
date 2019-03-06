<h1><?php echo __('Password reset'); ?></h1>
<p><?php echo __('To reset your password click the link below:'); ?></p>
<p><?php echo $this->Html->link(Router::url(array('controller' => 'users', 'action' => 'public_reset_password_confirm', $hash), true)); ?></p>