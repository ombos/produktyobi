<style>
	label {
		text-transform: inherit;
	}
</style>

<div class="profile change_password">
	<div class="view-wrapper">
		<?php //echo $this->element('profile_navigation'); ?>
		<h1>Ustawianie nowego hasła</h1>
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
					
						<div class="infoBox">
							Jeśli logujesz się do platformy po raz pierwszy, jesteś zobowiązany do zmiany hasła na swoje własne oraz ustawienie prawidłowego adresu email. <br/>
							Obecny adres email jest adresem technicznym i służy tylko do pierwszego zalogowania (tak jak hasło). Na nowopodany adres email, będziesz otrzymywać powiadomienia dotyczące Twoich produktów oraz będziesz mógł odzyskać swoje hasło do tego konta.
						</div>
					
						<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
							<?php echo $this->Form->create('User', array(
								'ajax' => true,
								'validationUrl' => 'profile/validate_change_password',
								'submit' => 'message = null; loading = true',
								'success' => 'Util.redirect(response.data.redirect)',
								'error' => 'message = response.errors; loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
							)); ?>
							<?php echo $this->Form->input('email', array('label' => __('Nowy adres email'), 'type' => 'text')); ?>
							<?php echo $this->Form->input('new_password', array('label' => __('Nowe hasło'), 'type' => 'password')); ?>
							<?php echo $this->Form->input('new_password2', array('label' => __('Potwierdź nowe hasło'), 'type' => 'password')); ?>
							<?php echo $this->Form->submit(__('Zapisz nowe hasło'), array('class' => 'btn btn-success')); ?>
							<?php echo $this->Form->end(); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
