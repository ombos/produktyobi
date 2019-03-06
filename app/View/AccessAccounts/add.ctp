<div class="access_accounts add">
	<div class="view-wrapper">
		<?php echo $this->element('access_accounts_navigation'); ?>
		
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
							<?php echo $this->Form->create('AccessAccount', array(
								'ajax' => true,
								'validationUrl' => 'access_accounts/validate_add',
								'submit' => 'message = null; loading = true',
								'success' => 'Util.redirect(response.data.redirect)',
								'error' => 'message = response.errors; loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
							)); ?>
							<?php echo $this->Form->input('login', array(
								'label' => __('login'),
								'between' => '<div class="login-wrapper"><div class="alias">'.AuthComponent::user('Architect.alias').' #&nbsp;</div><div class="login">',
								'after' => '</div></div>'
							)); ?>
							<?php echo $this->Form->input('password', array('label' => __('password'), 'type' => 'text')); ?>
							<?php echo $this->Form->submit(__('Add'), array('class' => 'btn btn-success')); ?>
							<?php echo $this->Form->end(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
