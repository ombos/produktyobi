<style>

	h1, h2 {
		margin-top: 30px;
		padding: 0 !important;
	}

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
							<?php echo $this->Form->input('id', array(
								'value' => $category['ObiCategory']['id']
							)); ?>
							<div class="row">
								<div class="col-xs-12">
									<h1>Edytuj kategorię: <?php echo $category['ObiCategory']['name']; ?></h1>
									
									<table>
										<tr>
											<td>Nazwa: </td>
											<td>
												<?php echo $this->Form->input('ObiCategory.name', array(
													'type' => 'text',
													'label' => false,
													'class' => 'input_search',
													'placeholder' => 'Wpisz nazwę kategorii',
													'value' => $category['ObiCategory']['name']
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
													'value' => $category['ObiCategory']['obi_group_id']
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
													'value' => $category['ObiCategory']['obi_inner_category_id']
												)); ?>
											</td>
										</tr>
										
									</table>
								</div>
								
								<div class="col-xs-12">
								
									<h1>
										Atrybuty kategorii
										<span style="margin-left: 20px; cursor: pointer;" ng-click="addCatElement()"><i class="fa fa-plus-square" aria-hidden="true"></i></span>
									</h1>
									
									<table id="catAttrs">
									<?php if (!empty($categoryAttrs)) { ?>
											<?php foreach ($categoryAttrs as $value) { ?>
											<tr id="cd<?php echo $value['ObiCategoryData']['id']; ?>">
												<td style="width: 70%">
													<?php echo $this->Form->input('ObiCategoryData.name', array(
														'type' => 'text',
														'label' => false,
														'class' => 'input_search',
														'placeholder' => 'Wpisz nazwę atrybutu',
														'value' => $value['ObiCategoryData']['name']
													)); ?>
												</td>
												<td>
													<span style="cursor: pointer; color: #ff0033; font-size: 28px; display: block; margin-top: -15px;" ng-click="delCatElement('cd<?php echo $value['ObiCategoryData']['id']; ?>')"><i class="fa fa-minus-square" aria-hidden="true"></i></span>
												</td>
											</tr>
											<?php } ?>
										
									<?php } else {
										echo "<p>Aktualnie ta kategoria nie posiada zdefiniowanych atrybutów.</p>";
									} ?>
									</table>
										
								</div>
								
							</div>
							
							<br/><br/>
							
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
