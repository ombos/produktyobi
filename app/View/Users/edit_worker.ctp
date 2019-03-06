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
							<div class="clearfix">
								<?php
								echo $this->Form->input('UserRoleAssociation.user_role_id', array(
									'label' => 'Uprawnienia',
									'type' => 'select',
									'multiple' => 'checkbox',
									'options' => $userRoles,
									'selected' => $userRolesAssociated,
								  ));
								?> 
							</div>
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
								<?php echo $this->Form->input('AccountDetails.biography', array('label' => __('Biografia'))); ?>
								<?php echo $this->Form->input('AccountDetails.bank_account_number', array('label' => __('Numer konta bankowego'))); ?>
								<?php echo $this->Form->input('AccountDetails.bank', array('label' => __('Nazwa banku'))); ?>
							</div>
							
							<div class="clearfix">
                                <h3>Podpis</h3>
								<?php echo $this->Form->input('AccountDetails.personalities_signature', array(
									'type' => 'checkbox', 
									'label' => 'imieniem i nazwiskiem',
								)); ?>
								<?php echo $this->Form->input('AccountDetails.pseudonym_signature', array(
									'type' => 'checkbox',
									'label' => 'pseudonimem',
								)); ?>
							</div>
							
							<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(7))) { ?>
								<div class="authorContainer clearfix">
									<br/><br/>
									<h2>Autor</h2>
									<div class="clearfix">
										<h3><?php echo __('Rodzaje tekstów'); ?></h3>
										<?php echo $this->Form->input('SystemTextType', array('multiple' => 'checkbox', 'label' => false)); ?>
									</div>
									<br/><br/>
									<div class="clearfix">
										<h3><?php echo __('Języki'); ?></h3>
										<?php echo $this->Form->input('SystemLanguage', array('multiple' => 'checkbox', 'label' => false)); ?>
									</div>
									<br/><br/>
									<div class="clearfix">	
										<h3><?php echo __('Tematyka'); ?></h3>
										<?php echo $this->Form->input('SystemTopicType', array('multiple' => 'checkbox', 'label' => false)); ?>
									</div>
								</div>
							<?php } ?>
							<br/><br/>
							<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
							<?php echo $this->Form->end(); ?>
							
							<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(6))) { ?>
								<div class="blogerContainer clearfix">
									<br/><br/>
									<h2>Bloger</h2>
									<?php 
										if ($blogerWebsites) {
										
										?>
										<div class="advanced-list">
											<table>
												<thead>
													<tr>
														<th>Nazwa</th>
														<th>Opis</th>
														<th>Adres url</th>
														<th></th>
														<th></th>
													</tr>
												</thead>
												<tbody>
												<?php
												$i = 0;
												foreach ($blogerWebsites as $key => $value) {
													$i++;
													?>
													<tr>
														<td><?php echo $value['BlogerWebsite']['name']; ?></td>
														<td><?php echo $value['BlogerWebsite']['description']; ?></td>
														<td><?php echo $value['BlogerWebsite']['url']; ?></td>
														<td><?php echo $this->Html->link(__('Zobacz'), $value['BlogerWebsite']['url'], array('class' => 'btn btn-success')); ?></td>
														<td><?php echo $this->Html->link('zarządzaj', array(
															'controller' => 'bloger_websites',
															'action' => 'edit',
															$value['BlogerWebsite']['id']
														), array(
															'class' => 'btn btn-success'
														)); ?></td>
													</tr>
													<?php 
												}
												?>
												</tbody>
											</table>
										</div>
										<br/><br/>
										<?php
									} ?>
                                    <?php echo $this->Html->link('Dodaj nowy blog', array(
                                        'controller' => 'bloger_websites',
                                        'action' => 'add',
                                        $this->data['User']['id']
                                    ), 
                                    array(
                                        'class' => 'btn btn-success'
                                    )); ?>
								</div>
							<?php } ?>
							
							<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(8))) { ?>
								<div class="publisherContainer clearfix">
									<br/><br/>
									<h2>Wydawca</h2>
									<br/><br/>
									<h3 id="services">Aktywne serwisy</h3>
									<?php 
										if ($publisherWebsites) {
											?>
											<div class="advanced-list">
												<table>
													<thead>
														<tr>
															<th>Nazwa</th>
															<th>Opis</th>
															<th>Adres url</th>
															<th></th>
															<th></th>
														</tr>
													</thead>
													<tbody>
													<?php
													foreach ($publisherWebsites as $key => $value) {
														?>
														<tr>
															<td><?php echo $value['PublisherWebsite']['title']; ?></td>
															<td><?php echo $value['PublisherWebsite']['description']; ?></td>
															<td><?php echo $value['PublisherWebsite']['url']; ?></td>
															<td><?php echo $this->Html->link(__('Zobacz'), $value['PublisherWebsite']['url'], array('class' => 'btn btn-success')); ?></td>
															<td><?php echo $this->Html->link(__('Zarządzaj'), array(
																'controller' => 'publisher_website_offers',
																'action' => 'manage_service',
																$value['PublisherWebsite']['id'], 
															), array('class' => 'btn btn-success')); ?></td>
															<td></td>
														</tr>
														<?php
													}
													?>
													</tbody>
												</table>
											</div>
											<?php
										}
									?>
									<br/><br/>
									<?php echo $this->Html->link(__('Dodaj nowy serwis'), array('controller' => 'publisher_website_offers', 'action' => 'add', $id), array('class' => 'btn btn-success')); ?>
								</div>
							<?php } ?>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
