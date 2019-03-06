<h1>EDYTUJ PROFIL</h1>
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
							<?php echo $this->Form->input('AccountDetails.id', array('type' => 'hidden', 'value' => $this->data['AccountDetails']['id'])); ?>
							<?php echo $this->Form->input('email', array(
								'label' => __('Adres email')
							)); ?>
							<?php echo $this->Form->input('name', array(
								'label' => __('Personalia / nazwa')
							)); ?>
                            <div class="clearfix" style="margin-top:-20px;">
                                <?php echo $this->Form->input('accepted_newsletter', array(
                                    'label' => __('Zgoda na newsletter')
                                )); ?>
                            </div>
							<?php echo $this->Form->input('AccountDetails.vat_payment', array(
								'label' => __('Płatnik VAT'),
								'options' => array(
									0 => __('Nie'),
									1 => __('Tak')
								),
								'ng-model' => 'vatPayment',
								'empty' => 'select vat payment',
								)); ?>
							<div ng-init="vatPayment = <?php 
								if ($this->data['AccountDetails']['vat_payment'] != NULL) {	
									echo $this->data['AccountDetails']['vat_payment']; 
								} else {
									echo 'null';
								}	
							?>">
								<div ng-if="vatPayment == 0">
									<?php echo $this->Form->input('AccountDetails.birthday', array('label' => __('Data urodzenia'))); ?>
									<?php echo $this->Form->input('AccountDetails.birth_place', array('label' => __('Miejsce urodzenia'))); ?>
									<?php echo $this->Form->input('AccountDetails.father_name', array('label' => __('Imię ojca'))); ?>
									<?php echo $this->Form->input('AccountDetails.mother_name', array('label' => __('Imię matki'))); ?>
									<?php echo $this->Form->input('AccountDetails.pesel', array('label' => __('Numer PESEL'))); ?>
									<?php echo $this->Form->input('AccountDetails.address_state', array('label' => __('Województwo'))); ?>
									<?php echo $this->Form->input('AccountDetails.address_powiat', array('label' => __('Powiat'))); ?>
									<?php echo $this->Form->input('AccountDetails.address_gmina', array('label' => __('Gmina'))); ?>
									<?php echo $this->Form->input('AccountDetails.address_city', array('label' => __('Miasto'))); ?>
									<?php echo $this->Form->input('AccountDetails.address_street', array('label' => __('Ulica'))); ?>
									<?php echo $this->Form->input('AccountDetails.address_zipcode', array('label' => __('Kod pocztowy'))); ?>
									<?php echo $this->Form->input('AccountDetails.tax_council', array('label' => __('Urząd Skarbowy'))); ?>
								</div>
								<div ng-if="vatPayment == 1">
									<?php echo $this->Form->input('AccountDetails.invoice_name', array('label' => __('Nazwa firmy'))); ?>
									<?php echo $this->Form->input('AccountDetails.invoice_nip', array('label' => __('Numer NIP'))); ?>
									<?php echo $this->Form->input('AccountDetails.invoice_address', array('label' => __('Adres firmowy'))); ?>
								</div>
							</div>
							<?php $this->Form->input('AccountDetails.bank_account_number', array('label' => __('Numer konta bankowego'))); ?>
							<?php $this->Form->input('AccountDetails.bank', array('label' => __('Nazwa banku'))); ?>
							
							
							
							<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
							<?php echo $this->Form->end(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
