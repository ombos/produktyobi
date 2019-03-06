<h1>LISTA UŻYTKOWNIKÓW</h1>
<div class="users index">
	<div class="view-wrapper">
		<?php echo $this->element('users_navigation'); ?>
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
									rds-list-url="/users/filter_index_correctors"
									rds-list-items="correctors"
									rds-list-filter-call="reload"
									rds-list-submit="wrapperParams.message = null; wrapperParams.loading = true"
									rds-list-success="wrapperParams.loading = false"
									rds-list-fault="wrapperParams.message = errorMessage; wrapperParams.messageType = 'danger'; wrapperParams.loading = false"
								>
									<table ng-show="correctors">
										<thead>
											<tr>
												<th><?php echo __('nazwa'); ?></th>
												<th></th>
											</tr>
										</thead>
										<tbody ng-repeat="corrector in correctors" ng-init="shell = {corrector:corrector}">
											<tr>
												<td>{{corrector.User.name}}</td>
												<td>
													<?php echo $this->Html->link(__('zarządzaj'),'', array('class' => 'btn btn-sm btn-primary', 'ng-href' => '{{corrector.view_url}}')); ?>
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
