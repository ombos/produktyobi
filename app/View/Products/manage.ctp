<style>

	div.message {
		display: none !important;
	}

	.btn {
		background: #ff7313;
		color: #000;
		border-radius: 4px;
		width: 100px;
		border: 1px solid #000;
		padding: 2px;
		font-size: 14px;
		text-transform: uppercase;
	}

	a {
		color: #000;
	}
	
	h1, h2 {
		margin-top: 30px;
		padding: 0 !important;
	}
	
	.input_search {
		box-sizing: content-box;
		width: 78%;
		border-radius: 4px;
		border: 1px solid #aaa;
		padding: 10px 20px;
		display: block;
		box-shadow: inset 0px 2px 7px #ccc;
		-moz-box-shadow: inset 0px 2px 7px #ccc;
		-webkit-box-shadow: inset 0px 2px 7px #ccc;
		float: left;
	}
	
	.input_filter {
		box-sizing: content-box;
		width: 15%;
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
	
</style>

<div ng-if="true" class="profile change_password">
	<div class="view-wrapper">
		<?php echo $this->element('products_navigation'); ?>
		<div class="content">
			<div class="container">
				<h2>Zarządzanie produktami</h2>
				<h5>Wszystkich produktów: <span style="color: #ff0033" id="totalProductCount"><?php echo count($totalProducts); ?></span></h5>
				<div class="row">
					<div class="col-xs-12">
						<div app-products ng-init="errorMessage = '<?php echo Consts::$faultMessage; ?>'">
							<div
								rds-modal
								rds-modal-open="openModal"
								rds-modal-positive-label="<?php echo __('Tak'); ?>"
								rds-modal-positive-action="deleteProduct()"
								rds-modal-negative-label="<?php echo __('Anuluj'); ?>"
							>
								<?php echo __('Czy na pewno chcesz skasować ten produkt ?'); ?>
							</div>
							<div
								rds-wrapper
								rds-wrapper-loading="loading"
								rds-wrapper-message="message"
								rds-wrapper-message-type="messageType"
							>
								<div
									class="advanced-list"
										rds-list
										rds-list-url="/products/filter_index_all"
										rds-list-items="products"
										rds-list-filter-call="reload"
										rds-list-submit="message = null; loading = true"
										rds-list-success="loading = false; productsFound= products.length;"
										rds-list-fault="message = errorMessage; messageType = 'danger'; loading = false"
								>
									<div>
										
										<?php echo $this->Form->input('ObiProductDataSearchResult.active', array(
											'type' => 'select',
											'options' => array(
												-1 => 'Odrzucone',
												0 => 'Do sprawdzenia',
												1 => 'Aktywne'
											),
											'empty' => 'Wszystkie',
											'label' => 'Status produktu',
											'class' => 'input_filter',
											'rds-list-filter' => 'ObiProduct.active',
											'rds-list-filter-value' => 'obiProductActive',
											'ng-model' => 'obiProductActive',
											'ng-change' => 'reload()'
										)); ?>
									
										<?php echo $this->Form->input('ObiProductDataSearchResult.search_phrase', array(
											'type' => 'text',
											'label' => false,
											'rds-list-filter' => 'ObiProductDataSearchResult.name',
											'rds-list-filter-value' => 'searchPhrase',
											'ng-model' => 'searchPhrase',
											'ng-change' => 'search(searchPhrase)',
											'ng-model-options' => '{debounce: 700}',
											'class' => 'input_search',
											'placeholder' => 'Wpisz kategorię / numer OBI / numer EAN - aby wyszukać interesujące produkty (minimum 3 znaki)'
										)); ?>
										
										<div style="clear: both"></div>
										
									</div>
								
									<table ng-show="products" app-table-sort="orderBy" style="margin-top: 30px">
										<thead>
											<tr>
												<th></th>
												<th app-table-sort-by="OrderVariant.name" app-table-sort-by-var="orderBy">Produkt</th>
												<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy">Status</th>
												<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy">EAN</th>
												<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy">Dane log. zaak.</th>
												<th app-table-sort-by="Project.name" app-table-sort-by-var="orderBy">Kategoria</th>
												<th style="width: 150px"></th>
											</tr>
										</thead>
										<tbody>
											<tr class="product_row" ng-repeat="product in products | orderBy:orderBy">
												<td>
													<!---<img src="/img/no-image.png" title="{{product.ObiProduct.name}}" />-->
													<img src="/files/products/{{product.ObiProductDataSearchResult.thumb_url}}" onerror="this.onerror=null;this.src='/img/no-image.png';" />
												</td>
												<td>{{product.ObiProductDataSearchResult.name}}</td>
												<td>
													<span ng-show="product.ObiProductDataSearchResult.active == 1" style="font-weight: bold; color: #006600"><i class="fa fa-check-circle" aria-hidden="true"></i> aktywny</span>
													<span ng-show="product.ObiProductDataSearchResult.active == 0" style="font-weight: bold; color: #666666"><i class="fa fa-question-circle" aria-hidden="true"></i> do sprawdzenia</span>
													<span ng-show="product.ObiProductDataSearchResult.active == -1" style="font-weight: bold; color: #ff0033"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> odrzucony</span>
												</td>
												<td>{{product.ObiProductDataSearchResult.ean}}</td>
												<td style="text-align: center"><i class="fa fa-times" aria-hidden="true" style="color: #ff0033"></i></td>
												<td>
													<span>
														<em >
															{{product.ObiProductDataSearchResult.category_name}}
														</em>
													</span>
												</td>
												<td>
													<?php echo $this->Html->link('<i class="fa fa-pencil-square-o" aria-hidden="true"></i> edytuj', '/products/edit/{{product.ObiProductDataSearchResult.obi_product_id}}', array('escape' => false, 'escapeUrl' => false, 'class' => 'btn')); ?>
													
												</td>
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
