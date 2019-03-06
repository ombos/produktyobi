<style>
	.userObiCategories li {
		margin-bottom: 7px;
		list-style: circle;
		margin-left: 20px;
	}
	
	div.users input[type="text"], div.users input[type="password"] {
		box-sizing: content-box;
		border-radius: 4px;
		border-color: #aaa;
		padding: 5px 20px;
		display: block;
		width: calc(100% - 42px);
		box-shadow: inset 0px 2px 7px #ccc;
		-moz-box-shadow: inset 0px 2px 7px #ccc;
		-webkit-box-shadow: inset 0px 2px 7px #ccc;
	}

	div.users .checkbox {
		left: 0;
		top: 0;
		margin: 0;
	}

	label {
		text-transform: inherit;
	}
</style>

<h1>EDYTUJ UŻYTKOWNIKA</h1>
<div class="users add">
	<div class="view-wrapper">
		<?php echo $this->element('users_navigation'); ?>
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
							<?php echo $this->Form->create('User', array(
								'ajax' => true,
								'validationUrl' => 'users/validate_edit',
								'submit' => 'message = null; loading = true',
								'success' => 'Util.redirect(response.data.redirect)',
								'error' => 'message = response.errors; loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
							)); ?>				
							<?php echo $this->Form->input('id'); ?>
							<?php echo $this->Form->input('AccountDetails.id'); ?>
							
							<?php 
							if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2))) { 
								$displayPermissions = 'block';
							} else {
								$displayPermissions = 'none';
							}
							?>
							
							<div class="row" style="display: <?php echo $displayPermissions; ?>">
								<div class="col-xs-12">
								<?php 
									echo $this->Form->input('UserRoleAssociation.user_role_id', array(
										'label' => 'Uprawnienia',
										'type' => 'select',
										'multiple' => 'checkbox',
										'options' => $userRoles,
										'selected' => $userRolesAssociated
									  ));
								?>
							
								</div>
							</div>
							<br/><br/>
							
							<div class="row">
								<div class="col-xs-6"><?php echo $this->Form->input('User.name', array('label' => __('Personalia / nazwa'))); ?></div>
								<div class="col-xs-6"><?php echo $this->Form->input('User.company_name', array('label' => 'Nazwa firmy', 'placeholder' => __('Nazwa firmy'))); ?></div>
								<div class="col-xs-6"><?php echo $this->Form->input('User.address_street', array('label' => 'Ulica', 'placeholder' => __('Ulica'))); ?></div>
								<div class="col-xs-6"><?php echo $this->Form->input('User.address_building', array('label' => 'Numer budynku', 'placeholder' => __('Numer budynku'))); ?></div>
								<div class="col-xs-6"><?php echo $this->Form->input('User.address_flat', array('label' => 'Numer lokalu / mieszkania', 'placeholder' => __('Numer lokalu / mieszkania'))); ?></div>
								<div class="col-xs-6"><?php echo $this->Form->input('User.address_city', array('label' => 'Miejscowość', 'placeholder' => __('Miejscowość'))); ?></div>
								<div class="col-xs-6"><?php echo $this->Form->input('User.address_nip', array('label' => 'Numer NIP', 'placeholder' => __('Numer NIP'))); ?></div>
								
								<div class="col-xs-6"><?php echo $this->Form->input('email', array('label' => __('Adres email'), 'placeholder' => __('Adres email'))); ?></div>

								<div class="col-xs-12">
									<?php $rulesLink = $this->Html->link('regulamin', 'https://produktyobi.pl/files/documents/regulamin_produktyobi.pdf', array('target' => '_blank')); ?>
									<?php $materialsLink = $this->Html->link('regulaminem', 'https://produktyobi.pl/files/documents/prawa_do_materialow.pdf', array('target' => '_blank')); ?>
									<?php echo $this->Form->input('User.accepted_rules', array('type' => 'checkbox', 'label' => 'Akceptuję '.$rulesLink)); ?>
								</div>
								
								<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,9))) { ?>
									<div class="col-xs-12">
										<?php echo $this->Form->input('ObiProduct.search_phrase', array(
											'type' => 'checkbox',
											'label' => 'Zezwalam na umieszczenie powyższych materiałów na stronie www.obi.pl oraz innych kanałach zgodnie z '.$materialsLink,
											'checked' => true
										)); ?>
									</div>
								<?php } ?>
							</div>
							
							
							<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2))) { ?>
							
							<label>Przypisane kategorie</label>
							
							<?php if ($userObiCategories) { 
							
									echo "<ul class='userObiCategories'>";
									foreach ($userObiCategories as $key => $value) {
										echo "<li style='width: 30%; float: left'> <span style='cursor: pointer; color: #ff0033' title=''usuń tę kategorię' ng-click='deleteUserObiCategory(".$value['ObiCategory']['id'].")'><i class='fa fa-trash' aria-hidden='true'></i></span> ".$value['ObiCategory']['name']." (".$value['ObiCategory']['obi_inner_category_id']." / ".$value['ObiCategory']['obi_group_id'].")</li>";
									}
									echo "</ul>";
								}
							?>
                           <div style="clear: both"></div>
						   <br/><br/>
							<?php echo $this->Form->input('ObiProduct.search_phrase', array(
								'type' => 'text',
								'label' => 'Dodaj kategorię do użytkownika:',
							
								'ng-model' => 'searchPhrase',
								
								'class' => 'input_search',
								'placeholder' => 'Wpisz nazwę kategorii'
							)); ?>
						   
						   <?php } ?>
						   
						   <br/><br/>
							<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
							<?php echo $this->Form->end(); ?>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
