<style>

	a {
		color: #000;
	}
	
	div.message {
		display: none !important;
	}
	
	.input_search {
		box-sizing: content-box;
		width: calc(100% - 140px);
		border-radius: 4px;
		border: 1px solid #aaa;
		padding: 10px 20px;
		display: block;
		box-shadow: inset 0px 2px 7px #ccc;
		-moz-box-shadow: inset 0px 2px 7px #ccc;
		-webkit-box-shadow: inset 0px 2px 7px #ccc;
		float: left;
	}
	
	table tr.product_row {
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-ms-transition: all 0.3s ease 0s;
	}
	
	table tr.product_row td {
		padding: 8px 10px;
	}
	
	table tr.product_row:hover {
		background: #ff7313;
		color: #fff;
	}
	
	table tr.product_row:hover a {
		color: #fff;
	}
	
	table tr td img {
		max-width: 32px;
	}
	
	.found {
		float: right;
	}
	
	.found span {
		display: block;
		text-align: center;
	}
	
	.found span.amount {
		font-size: 25px;
		font-weight: 700;
		color: #ff7313;
	}
	
	h1 {
		padding: 0;
	}
	
	label {
		text-transform: inherit;
	}
	
</style>

<div ng-if="true" class="profile change_password">
	<div class="view-wrapper">
		<?php echo $this->element('products_navigation'); ?>
		<div class="content">
			<div class="container">
				<h1>Zestawienie danych logistycznych</h1>
				<div class="row">
					<div class="col-xs-12">
						<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
							<div app-products ng-init="errorMessage = '<?php echo Consts::$faultMessage; ?>'">
								<div
									rds-wrapper
									rds-wrapper-loading="loading"
									rds-wrapper-message="message"
									rds-wrapper-message-type="messageType"
								>
									<div class="filter-box">
										<div
											class="advanced-list"
											rds-list
											rds-list-url="/products/logistic_data_index"
											rds-list-items="data"
											rds-list-filter-call="reload"
											rds-list-submit="message = null; loading = true"
											rds-list-success="loading = false"
											rds-list-fault="message = errorMessage; messageType = 'danger'; loading = false"
										>
									
											<!--
											<div class="filter-box-column">	
												<div class="input date form-group ng-scope">
													<label class="control-label">Wybierz dostawcę, aby wyświetlić dane:</label>
													<select name="">
														<option value="0">wybierz dostawcę z listy...</option>
														<?php 
															foreach ($users as $user) {
																echo "<option value='".$user['User']['id']."'>".$user['User']['name']."</option>";
															}
														?>
													</select>
												</div>
											</div>
											-->
											<div class="filter-box-column">	
												<?php echo $this->Form->input('ObiProduct.from', array(
													'type' => 'date',
													'label' => 'Pokaż od',
													'rds-list-filter' => 'ObiProduct.from',

												)); ?>
											</div>
											<div class="filter-box-column">	
												<?php echo $this->Form->input('ObiProduct.to', array(
													'type' => 'date',
													'label' => 'Pokaż do',
													'rds-list-filter' => 'ObiProduct.to',
												)); ?>
											</div>
											<div class="filter-box-column control-buttons">
												<button ng-click="reload();" class="btn btn-primary"><i class="fa fa-filter"></i></button>
												<button ng-click="orderNumber = null; orderVariantId = null; userName = null; projectName = null; orderStatusId = null; orderSpecialNotice = null; orderArchived = 0; resetDeadlineFrom(); resetDeadlineTo(); resetCreatedFrom(); resetCreatedTo(); reload();" class="btn btn-warning"><i class="fa fa-ban"></i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
