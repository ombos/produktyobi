<?php $order = $this->data['Order']; ?>

	<div
		id="contact"
		class="form-part clearfix"
		style="width:100%;"
		ng-init="contactPersonalities = '<?php echo $order['order_contact_personalities']; ?>'; contactMobile = '<?php echo $order['order_contact_mobile']; ?>'; contactEmail = '<?php echo $order['order_contact_email']; ?>'; contactPreffered = '<?php echo $order['order_preffered_contact']; ?>';"> 
		<h2><?php echo __('Dane kontaktowe'); ?></h2>
		<div class="row">
			<div class="col-xs-6">
				<?php echo $this->Form->input('order_contact_address', array(
					'label' => __('Wybierz osobę kontaktową z listy'),
					'empty' => __('Wybierz z listy'),
					'options' => $addresses,
					'ng-model' => 'address',
					'ng-change' => 'clientAddressSelect(address)'
				)); ?>
			</div>
			<div class="col-xs-6">
				<?php echo $this->Form->input('order_contact_personalities', array(
					'label' => __('imię i nazwisko do kontaktu'),
					'ng-model' => 'contactPersonalities',
				)); ?>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-4">
				<?php echo $this->Form->input('order_contact_mobile', array(
					'label' => __('telefon kontaktowy'),
					'ng-model' => 'contactMobile'
				)); ?>
			</div>
			<div class="col-xs-4">
				<?php echo $this->Form->input('order_contact_email', array(
					'label' => __('email kontaktowy'),
					'ng-model' => 'contactEmail'
				)); ?>
			</div>
			<div class="col-xs-4">
				<?php echo $this->Form->input('order_preffered_contact', array(
					'label' => __('preferowana forma kontaktu'),
					'empty' => __('wybierz'),
					'options' => array(
						'email' => __('E-mail - dowolna pora'),
						'phone' => __('Telefon - dowolna pora'),
					),
					'ng-model' => 'contactPreffered'
				)); ?>
			</div>
		
	</div>
</div>