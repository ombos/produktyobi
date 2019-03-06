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
		<?php echo $this->element('raports_navigation'); ?>
		<div class="content">
			<div class="container">
				<h1>Produkty nieprzypisane</h1>
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
											rds-list-url="/raports/filter_unsigned"
											rds-list-items="products"
											rds-list-filter-call="reload"
											rds-list-submit="message = null; loading = true"
											rds-list-success="loading = false"
											rds-list-fault="message = errorMessage; messageType = 'danger'; loading = false"
										>
										<div id="messageExport" style="display: none; background: #eaeaea; padding: 10px 20px; text-align: center; margin-bottom: 30px">Trwa eksport, proszę czekać...</div>
										<div ng-show="products">
											<p>Liczba produktów: xxx <button type="button" class="btn btn-success" style="margin-left: 100px" ng-click="exportUnsigned()"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Eksportuj do excela</button></p>
											<table>
												<thead>
													<tr>
														<th></th>
														<th>Produkt</th>
														<th>OBI numer</th>
														<th>Utworzono data</th>
													</tr>
												</thead>
												<tbody>
													<tr class="product_row" ng-repeat="product in products">
														<td></td>
														<td>{{product.ObiProductDataSearchResult.name}}</td>
														<td>{{product.ObiProductDataSearchResult.obi_inner_id}}</td>
														<td>{{product.ObiProductDataSearchResult.created}}</td>
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
		</div>
	</div>
</div>
