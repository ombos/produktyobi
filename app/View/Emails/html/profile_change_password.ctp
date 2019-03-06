<h1><?php echo __('Password change'); ?></h1>
<p><?php echo __('To accept password change click the link below:'); ?></p>
<p><?php echo $this->Html->link(Router::url(array('controller' => 'profile', 'action' => 'change_password_confirm', $hash), true)); ?></p>