<div class="access_accounts index">
	<div class="view-wrapper">
		<?php echo $this->element('access_accounts_navigation'); ?>
		
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div app-access-account-list ng-init="wrapperParams = {}; errorMessage = '<?php echo Consts::$faultMessage; ?>'">
							<div
								rds-modal
								rds-modal-open="openModal"
								rds-modal-positive-label="<?php echo __('Yes'); ?>"
								rds-modal-positive-action="deleteAccessAccount()"
								rds-modal-negative-label="<?php echo __('Cancel'); ?>"
							>
								<?php echo __('Are you sure you want to delete this access account?'); ?>
							</div>

							<div
								rds-wrapper
								rds-wrapper-loading="wrapperParams.loading"
								rds-wrapper-message="wrapperParams.message"
								rds-wrapper-message-type="wrapperParams.messageType"
							>
								<div
									class="advanced-list"
									rds-list
									rds-list-url="/access_accounts/filter_index"
									rds-list-items="accessAccounts"
									rds-list-filter-call="reload"
									rds-list-submit="wrapperParams.message = null; wrapperParams.loading = true"
									rds-list-success="wrapperParams.loading = false"
									rds-list-fault="wrapperParams.message = errorMessage; wrapperParams.messageType = 'danger'; wrapperParams.loading = false"
								>
									<table ng-show="accessAccounts">
										<thead>
											<tr>
												<th><?php echo __('login'); ?></th>
												<th><?php echo __('password'); ?></th>
												<th class="center"><?php echo __('active'); ?></th>
												<th></th>
											</tr>
										</thead>
										<tbody ng-repeat="accessAccount in accessAccounts" ng-class="{open:shell.edit}" ng-init="shell = {accessAccount:accessAccount}">
											<tr>
												<td>{{shell.accessAccount.AccessAccount.login}}</td>
												<td>{{shell.accessAccount.AccessAccount.password}}</td>
												<td class="center">
													<span
														rds-switch
														rds-switch-url="access_accounts/active"
														rds-switch-model="shell.accessAccount"
														rds-switch-field="shell.accessAccount.AccessAccount.active"
													></span>
												</td>
												<td>
													<a class="btn btn-sm btn-primary" ng-click="shell.edit = !shell.edit"><?php echo __('Edit'); ?></a>
													<a class="btn btn-sm btn-danger" ng-click="deleteAccessAccount(shell.accessAccount)"><?php echo __('Delete'); ?></a>
												</td>
											</tr>
											<tr ng-if="shell.edit">
												<td colspan="4">
													<?php echo $this->Form->create('AccessAccount', array(
														'ajax' => true,
														'validationUrl' => 'access_accounts/validate_edit',
														'submit' => 'wrapperParams.message = null; wrapperParams.loading = true; Flash.set(null)',
														'success' => 'wrapperParams.message = response.message; wrapperParams.messageType = \'success\'; wrapperParams.loading = false; shell.accessAccount = response.data',
														'error' => 'wrapperParams.message = response.errors; wrapperParams.messageType = \'danger\'; wrapperParams.loading = false',
														'fault' => 'wrapperParams.message = "'.Consts::$faultMessage.'"; wrapperParams.messageType = \'danger\'; wrapperParams.loading = false'
													)); ?>
													<?php $this->Form->unlockField('id'); ?>
													<?php echo $this->Form->input('id', array('value' => '{{shell.accessAccount.AccessAccount.id}}')); ?>
													<?php echo $this->Form->input('login', array(
														'label' => __('login'),
														'value' => '{{shell.accessAccount.AccessAccount.login}}',
														'between' => '<div class="login-wrapper"><div class="alias">'.AuthComponent::user('Architect.alias').' #&nbsp;</div><div class="login">',
														'after' => '</div></div>'
													)); ?>
													<?php echo $this->Form->input('password', array('label' => __('password'), 'type' => 'text', 'value' => '{{shell.accessAccount.AccessAccount.password}}')); ?>
													<?php echo $this->Form->submit(__('Save'), array('class' => 'btn btn-success')); ?>
													<a class="btn btn-warning" ng-click="shell.edit = false"><?php echo __('Cancel'); ?></a>
													<?php echo $this->Form->end(); ?>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
