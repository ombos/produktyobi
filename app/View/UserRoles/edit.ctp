<h1>Zarządzanie uprawnieniami: <?php echo $roleDetails['UserRole']['name']; ?></h1>
<div class="user_roles edit">
	<div class="view-wrapper">
		<?php echo $this->element('settings_navigation'); ?>

		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<?php echo $this->Form->create('UserRoleDetail', array(
								'ajax' => true,
								'validationUrl' => 'system_order_element/validate_edit',
								'submit' => 'message = null; loading = true',
								'success' => 'Util.redirect(response.data.redirect)',
								'error' => 'message = response.errors; loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
							)); ?>
							
						<?php
						echo $this->Form->input('details', array(
							'multiple' => 'checkbox',
							'options' => $rolesArray,
							'selected' => $rolesSelected
						));
						?>
						<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
						<?php echo $this->Form->end(); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
