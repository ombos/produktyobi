<style>
	.btn {
		background: #ff7313;
		color: #000;
		border-radius: 4px;
		width: 100px;
		border: 1px solid #000;
		padding: 2px;
		font-size: 14px;
		text-transform: uppercase;
	}
	
	.message {
		display: none;
	}
</style>

<h1>Lista użytkowników</h1>
<div class="users index">
	<div class="view-wrapper">
		<?php echo $this->element('users_navigation'); ?>
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div app-user-list ng-init="wrapperParams = {}; userId = <?php echo AuthComponent::user('id'); ?>; errorMessage = '<?php echo Consts::$faultMessage; ?>'">
							<div
								rds-modal
								rds-modal-open="openModal"
								rds-modal-positive-label="<?php echo __('Tak'); ?>"
								rds-modal-positive-action="deleteUser()"
								rds-modal-negative-label="<?php echo __('Anuluj'); ?>"
							>
								<?php echo __('Czy na pewno chcesz skasować tego użytkownika ?'); ?>
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
									rds-list-url="/users/filter_index"
									rds-list-items="users"
									rds-list-filter-call="reload"
									rds-list-submit="wrapperParams.message = null; wrapperParams.loading = true"
									rds-list-success="wrapperParams.loading = false"
									rds-list-fault="wrapperParams.message = errorMessage; wrapperParams.messageType = 'danger'; wrapperParams.loading = false"
                                    ng-init="orderBy = 'Order.created'"
								>
                                    <div class="filter-box">
                                        <div class="filter-box-column">
                                            <?php echo $this->Form->input('User.name', array(
                                                'type' => 'text',
                                                'label' => 'Personalia / nazwa',
                                                'rds-list-filter' => 'User.name',
                                                'rds-list-filter-value' => 'userName',
                                                'ng-model' => 'userName',
												'ng-keypress' => 'reload()'
                                            )); ?>
                                        </div>
                                        <div class="filter-box-column">
                                            <?php echo $this->Form->input('User.email', array(
                                                'type' => 'text',
                                                'label' => 'Adres email',
                                                'rds-list-filter' => 'User.email',
                                                'rds-list-filter-value' => 'userEmail',
                                                'ng-model' => 'userEmail',
												'ng-keypress' => 'reload()'
                                            )); ?>
                                        </div>
                                        <div class="filter-box-column">
                                            <?php echo $this->Form->input('UserRole.id_intval', array(
                                                'type' => 'select',
                                                'options' => $userRolesList,
                                                'empty' => '',
                                                'label' => 'Rola',
                                                'rds-list-filter' => 'UserRole.id_intval',
                                                'rds-list-filter-value' => 'userRoleId',
                                                'ng-model' => 'userRoleId',
												'ng-change' => 'reload()'
                                            )); ?>
                                        </div>
                                        <div class="filter-box-column">
                                            <?php echo $this->Form->input('User.active_intval', array(
                                                'type' => 'select',
                                                'options' => array(
                                                    0 => 'Nieaktywny',
                                                    1 => 'Aktywny',
                                                ),
                                                'empty' => '',
                                                'label' => 'Aktywny',
                                                'rds-list-filter' => 'User.active_intval',
                                                'rds-list-filter-value' => 'userActive',
                                                'ng-model' => 'userActive',
												'ng-change' => 'reload()'
                                            )); ?>
                                        </div>
                                    </div>
									<table ng-show="users" app-table-sort="orderBy">
										<thead>
											<tr>
												<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy"><?php echo __('Personalia / nazwa'); ?></th>
												<th app-table-sort-by="User.email" app-table-sort-by-var="orderBy"><?php echo __('Adres email'); ?></th>
												<th app-table-sort-by="User.roleNames" app-table-sort-by-var="orderBy"><?php echo __('Role'); ?></th>
												<th app-table-sort-by="User.active" app-table-sort-by-var="orderBy" class="center"><?php echo __('Aktywny'); ?></th>
												<th></th>
											</tr>
										</thead>
										<tbody ng-repeat="user in users | orderBy:orderBy">
											<tr class="{{user.User.roleNames}}">
												<td>{{user.User.name}}</td>
												<td>{{user.User.email}}</td>
												<td class="center roles">
													<span ng-repeat="role in user.UserRoleAssociation" style="width: 130px;display: block; float:left">
                                                        <span
                                                            rds-switch
                                                            rds-switch-readonly="false"
                                                            rds-switch-url="user_roles/activeRole"
                                                            rds-switch-model="role"
                                                            rds-switch-field="role.active"
                                                        ></span>
                                                        {{role.UserRole.name}}
													</span>
												</td>
												<td class="center">
													<span
														rds-switch
														rds-switch-readonly="!user.User.confirmed"
														rds-switch-url="users/active"
														rds-switch-model="user"
														rds-switch-field="user.User.active"
													></span>
												</td>
												<td>
													<span ng-if="user.User.id != userId && user.User.user_role_id != 2">
														<?php echo $this->Html->link('Edytuj', array('controller' => 'users', 'action' => 'edit', '{{user.User.id}}'), array('class' => 'btn btn-sm btn-primary', 'escape' => false, 'escapeUrl' => false)); ?>
														<a class="btn btn-sm btn-danger" ng-click="deleteUser(user)"><?php echo __('Skasuj'); ?></a>
													</span>
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
