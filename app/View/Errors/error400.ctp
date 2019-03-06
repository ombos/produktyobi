<h2><?php echo __('There is no page'); ?></h2>
<?php if (ENVIRONMENT == 0): ?>
<p class="error">
	<strong><?php echo __d('cake', 'Error'); ?>: </strong>
	<?php printf(
		__d('cake', 'The requested address %s was not found on this server.'),
		"<strong>'{$url}'</strong>"
	); ?>
</p>
<?php echo $this->element('exception_stack_trace'); ?>
<?php endif; ?>
