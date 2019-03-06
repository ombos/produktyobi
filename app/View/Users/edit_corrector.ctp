<h1>EDYTUJ KOREKTORA</h1>
<div class="users add">
	<div class="view-wrapper">
		<?php echo $this->element('settings_navigation'); ?>

		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
							<h3>Lista przypisanych do korektora użytkowników:</h3>
							<?php echo $this->Form->create('UserCorrectorAssociation', array(
								'ajax' => true,
								'validationUrl' => 'users/validate_edit',
								'submit' => 'message = null; loading = true',
								'success' => 'Util.redirect(response.data.redirect)',
								'error' => 'message = response.errors; loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
							)); ?>
							<?php echo $this->Form->input('corrector_user_id', array(
								'multiple' => 'checkbox',
								'options' => $users,
								'selected' => $usersAssociated)); ?>
							<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
							<?php echo $this->Form->end(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
