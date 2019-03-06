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
				<h1>Zestawienie danych logistycznych dostawców</h1>
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
											rds-list-url="/raports/filter_supplier"
											rds-list-items="products"
											rds-list-filter-call="reload"
											rds-list-submit="message = null; loading = true"
											rds-list-success="loading = false"
											rds-list-fault="message = errorMessage; messageType = 'danger'; loading = false"
										>
										
										<div class="row">
											
											<div class="col-xs-4">
												<?php echo $this->Form->input('ObiReport.supplier', array(
													'type' => 'select',
													'options' => $users,
													'empty' => 'wszyscy',
													'label' => 'Wybierz dostawcę',
													'class' => 'input_filter',
													'rds-list-filter' => 'ObiReport.supplier',
													'rds-list-filter-value' => 'supplier',
													'ng-model' => 'supplier',
												)); ?>
											</div>
											
											<div class="col-xs-4">
												<button ng-click="reload();" class="btn btn-primary" style="margin-top: 50px;"><i class="fa fa-filter"></i> pokaż</button>
											</div>
										</div>
										
										<div id="messageExport" style="display: none; background: #eaeaea; padding: 10px 20px; text-align: center; margin-bottom: 30px">Trwa eksport, proszę czekać...</div>
										<div ng-show="products">
											<p>Liczba produktów: xxx <button type="button" class="btn btn-success" style="display: none; margin-left: 100px" ng-click="exportLogistic(reportType, supplier)"><i class="fa fa-file-excel-o" aria-hidden="true"></i> Eksportuj do excela</button></p><br/><br/><br/>
											<table>
												<thead>
													<tr>
														<th></th>
														<th>Produkt</th>
														<th>OBI numer</th>
														
														<th title="Szerokość produktu">Szer.</th>
														<th title="Wysokość produktu">Wys.</th>
														<th title="Waga produktu">Waga</th>
														<th title="Głębokość produktu">Gł.</th>
														<th title="Szerokość produktu wraz z opakowaniem">Szer. op.</th>
														<th title="Wysokość produktu wraz z opakowaniem">Wys. op.</th>
														<th title="Waga produktu wraz z opakowaniem">Waga op.</th>
														<th title="Głębokość produktu wraz z opakowaniem">Gł. op.</th>
														
														<th title="Znacznik SET">Zn. set</th>
														<th title="Minimalna liczba sztuk">Min. l. szt.</th>
														<th title="Kraj pochodzenia">Kr. poch.</th>
														<th title="Taryfa celna">T. celna</th>
														<th title="ADR">ADR</th>
														<th title="Towar niebezpieczny">T. nie.</th>
														
														
														
														<th>Ostatnia zmiana</th>
													</tr>
												</thead>
												<tbody>
													<tr class="product_row" ng-repeat="product in products">
														<td></td>
														<td>{{product.ObiProduct.name}}</td>
														<td>{{product.ObiProductDataBasics.obi_product_id}}</td>
														
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_width == 0" style="font-weight: bold; color: #ff0033">{{product.ObiProductDataLogistics.product_width}}cm</span>
															<span ng-show="product.ObiProductDataLogistics.product_width != 0">{{product.ObiProductDataLogistics.product_width}}cm</span>
														</td>
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_height == 0" style="font-weight: bold; color: #ff0033">{{product.ObiProductDataLogistics.product_height}}cm</span>
															<span ng-show="product.ObiProductDataLogistics.product_height != 0">{{product.ObiProductDataLogistics.product_height}}cm</span>
														</td>
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_weight == 0" style="font-weight: bold; color: #ff0033">{{product.ObiProductDataLogistics.product_weight}}kg</span>
															<span ng-show="product.ObiProductDataLogistics.product_weight != 0">{{product.ObiProductDataLogistics.product_weight}}kg</span>
														</td>
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_depth == 0" style="font-weight: bold; color: #ff0033">{{product.ObiProductDataLogistics.product_depth}}cm</span>
															<span ng-show="product.ObiProductDataLogistics.product_depth != 0">{{product.ObiProductDataLogistics.product_depth}}cm</span>
														</td>
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_package_width == null" style="font-weight: bold; color: #ff0033">0cm</span>
															<span ng-show="product.ObiProductDataLogistics.product_package_width != null">{{product.ObiProductDataLogistics.product_package_width}}cm</span>
														</td>
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_package_height == null" style="font-weight: bold; color: #ff0033">0cm</span>
															<span ng-show="product.ObiProductDataLogistics.product_package_height != null">{{product.ObiProductDataLogistics.product_package_height}}cm</span>
														</td>
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_package_weight == null" style="font-weight: bold; color: #ff0033">0kg</span>
															<span ng-show="product.ObiProductDataLogistics.product_package_weight != null">{{product.ObiProductDataLogistics.product_package_weight}}kg</span>
														</td>
														<td>
															<span ng-show="product.ObiProductDataLogistics.product_package_depth == null" style="font-weight: bold; color: #ff0033">0cm</span>
															<span ng-show="product.ObiProductDataLogistics.product_package_depth != null">{{product.ObiProductDataLogistics.product_package_depth}}cm</span>
														</td>
														
														<td>{{product.ObiProductDataLogistics.znacznik_set}}</td>
														<td>{{product.ObiProductDataLogistics.minimalna_szt}}</td>
														<td>{{product.ObiProductDataLogistics.kraj_pochodzenia}}</td>
														<td>{{product.ObiProductDataLogistics.taryfa_celna}}</td>
														<td>{{product.ObiProductDataLogistics.adr}}</td>
														<td>{{product.ObiProductDataLogistics.unsafety}}</td>
														
														
														<td>{{product.ObiProductDataLogistics.modified}}</td>
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
