<style>
	div.categories input[type="text"], div.users input[type="password"] {
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

div.categories .checkbox {
	left: 0;
	top: 0;
	margin: 0;
}
	
</style>

<div class="categories edit">
	<div class="view-wrapper">
		<?php echo $this->element('categories_navigation'); ?>
		<div class="content">
			<div class="container">
				<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
					<div app-products ng-init="errorMessage = '<?php echo Consts::$faultMessage; ?>'">
						<div
							rds-wrapper
							rds-wrapper-loading="loading"
							rds-wrapper-message="message"
							rds-wrapper-message-type="messageType"
						>
							<?php echo $this->Form->create('ObiCategory', array(
								'ajax' => true,
								'validationUrl' => 'categories/validate_category_add',
								'submit' => 'message = null; loading = true',
								'success' => 'Util.redirect(response.data.redirect)',
								'error' => 'loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
							)); ?>
							<div class="row">
								<div class="col-xs-12">
									<h1>Dodaj kategorię:</h1>
									
									<table>
										<tr>
											<td>Nazwa: </td>
											<td>
												<?php echo $this->Form->input('ObiCategory.name', array(
													'type' => 'text',
													'label' => false,
													'class' => 'input_search',
													'placeholder' => 'Wpisz nazwę kategorii',
												)); ?>
											</td>
										</tr>
										
										<tr>
											<td>Grupa:</td>
											<td>
												<?php echo $this->Form->input('ObiCategory.obi_group_id', array(
													'type' => 'text',
													'label' => false,
													'class' => 'input_search',
													'placeholder' => 'Wpisz grupę',
												)); ?>
											</td>
										</tr>
										
										<tr>
											<td>OBI ID kategorii:</td>
											<td>
												<?php echo $this->Form->input('ObiCategory.obi_inner_category_id', array(
													'type' => 'text',
													'label' => false,
													'class' => 'input_search',
													'placeholder' => 'Wpisz OBI ID kategorii',
												)); ?>
											</td>
										</tr>
										
									</table>
								</div>
							</div>
							
							<br/><br/>
							<!--
							<div class="row">
								<div class="col-xs-12">
									<h3>Atrybuty kategorii:</h3>
										
										<?php if (!empty($category['ObiCategoryData'])) { ?>
											<table>
												<?php foreach ($category['ObiCategoryData'] as $key => $value) { ?>
													<tr>
														<td><?php print $value['name']; ?></td>
														<td><?php ?></td>
													</tr>
												<?php } ?>
											</table>
										<?php } ?>
								</div>
							</div>
							-->
							
							<div class="row">
								<div class="col-md-4">
									<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
									<?php echo $this->Form->end(); ?>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
