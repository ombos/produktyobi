<div class="profile user">
	<div class="view-wrapper">
		<?php echo $this->element('profile_navigation'); ?>
		
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="messageType">
							<?php echo $this->Form->create('User', array(
								'ajax' => true,
								'validationUrl' => 'profile/validate_user',
								'submit' => 'message = null; loading = true',
								'success' => 'message = response.message; messageType = "success"; loading = false',
								'error' => 'message = response.errors; messageType = "danger"; loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; messageType = "danger"; loading = false'
							)); ?>
							<?php echo $this->Form->input('id'); ?>
							<?php echo $this->Form->input('name', array('label' => __('name'))); ?>
							<?php echo $this->Form->submit(__('Save'), array('class' => 'btn btn-success')); ?>
							<?php echo $this->Form->end(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
