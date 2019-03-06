<h1>Zarządzanie typami zamówień</h1>
<div class="projects index">
	<div class="view-wrapper">
		<?php echo $this->element('settings_navigation'); ?>
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div app-order-list ng-init="wrapperParams = {}; errorMessage = '<?php echo Consts::$faultMessage; ?>'">
							<div
								rds-wrapper
								rds-wrapper-loading="wrapperParams.loading"
								rds-wrapper-message="wrapperParams.message"
								rds-wrapper-message-type="wrapperParams.messageType"
							>
								<div
									class="advanced-list"
									rds-list
									rds-list-url="/user_roles/filter_index"
									rds-list-items="roles"
									rds-list-filter-call="reload"
									rds-list-submit="wrapperParams.message = null; wrapperParams.loading = true"
									rds-list-success="wrapperParams.loading = false"
									rds-list-fault="wrapperParams.message = errorMessage; wrapperParams.messageType = 'danger'; wrapperParams.loading = false"
								>
									<table ng-show="roles">
										<thead>
											<tr>
												<th><?php echo __('nazwa'); ?></th>
												<th></th>
											</tr>
										</thead>
										<tbody ng-repeat="role in roles" ng-init="shell = {role:role}">
											<tr>
												<td>{{role.UserRole.name}}</td>
												<td>
													<?php echo $this->Html->link(__('zarządzaj'),'', array('class' => 'btn btn-sm btn-primary', 'ng-href' => '{{role.UserRole.view_url}}')); ?>
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
