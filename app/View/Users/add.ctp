<style>
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

<h1>DODAJ UŻYTKOWNIKA</h1>
<div class="users add">
	<div class="view-wrapper">
		<?php echo $this->element('users_navigation'); ?>

		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
							<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
								<?php echo $this->Form->create('User', array(
									'ajax' => true,
									'validationUrl' => 'users/validate_user_register',
									'submit' => 'message = null; loading = true',
									'success' => 'Util.redirect(response.data.redirect)',
									'error' => 'loading = false',
									'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
								)); ?>
								
								<div class="row">
									<div class="col-xs-12">
									<?php 
										echo $this->Form->input('RoleAssociation.user_role_id', array(
											'label' => 'Uprawnienia',
											'type' => 'select',
											'multiple' => 'checkbox',
											'options' => $userRoles,
										  ));
									?>
								
									</div>
								</div>
								<br/><br/>
								
								<div class="row">
									<div class="col-xs-6"><?php echo $this->Form->input('User.company_name', array('label' => false, 'placeholder' => __('Nazwa firmy'))); ?></div>
									<div class="col-xs-6"><?php echo $this->Form->input('User.address_street', array('label' => false, 'placeholder' => __('Ulica'))); ?></div>
									<div class="col-xs-6"><?php echo $this->Form->input('User.address_building', array('label' => false, 'placeholder' => __('Numer budynku'))); ?></div>
									<div class="col-xs-6"><?php echo $this->Form->input('User.address_flat', array('label' => false, 'placeholder' => __('Numer lokalu / mieszkania'))); ?></div>
									<div class="col-xs-6"><?php echo $this->Form->input('User.address_city', array('label' => false, 'placeholder' => __('Miejscowość'))); ?></div>
									<div class="col-xs-6"><?php echo $this->Form->input('User.address_nip', array('label' => false, 'placeholder' => __('Numer NIP'))); ?></div>
									
									
									<div class="col-xs-6"><?php echo $this->Form->input('User.email', array('label' => false, 'placeholder' => __('email'))); ?></div>
									<div class="col-xs-6"><?php echo $this->Form->input('User.password', array('label' => false, 'placeholder' => __('hasło'), 'type' => 'password')); ?></div>
									<div class="col-xs-6"><?php echo $this->Form->input('User.password2', array('label' => false, 'placeholder' => __('powtórz hasło'), 'type' => 'password')); ?></div>
									<div class="col-xs-6">
										<?php $rulesLink = $this->Html->link('regulamin', 'https://produktyobi.pl/files/documents/regulamin_produktyobi.pdf', array('target' => '_blank')); ?>
										<?php $materialsLink = $this->Html->link('regulaminem', 'https://produktyobi.pl/files/documents/prawa_do_materialow.pdf', array('target' => '_blank')); ?>
										<?php echo $this->Form->input('User.accepted_rules', array('type' => 'checkbox', 'label' => 'Akceptuję '.$rulesLink)); ?>
										<?php echo $this->Form->input('ObiProduct.search_phrase', array(
											'type' => 'checkbox',
											'label' => 'Zezwalam na umieszczenie powyższych materiałów na stronie www.obi.pl oraz innych kanałach zgodnie z '.$materialsLink,
											'checked' => false
										)); ?>
									</div>
								</div>
								<?php echo $this->Form->submit(__('Zarejestruj się'), array('class' => 'btn btn-success')); ?>
								<?php echo $this->Form->end(); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
