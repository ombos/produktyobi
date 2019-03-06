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
	
</style>

<div ng-if="true" class="profile change_password">
	<div class="view-wrapper">
		<?php echo $this->element('products_navigation'); ?>
		<div class="content">
			<div class="container">
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
									<div
										class="advanced-list"
										rds-list
										rds-list-url="/products/filter_index"
										rds-list-items="products"
										rds-list-filter-call="reload"
										rds-list-submit="message = null; loading = true"
										rds-list-success="loading = false; productsFound= products.length;"
										rds-list-fault="message = errorMessage; messageType = 'danger'; loading = false"
									>
										<div style="clear: both">
											<?php echo $this->Form->input('ObiProductDataSearchResult.search_phrase', array(
												'type' => 'text',
												'label' => false,
												'rds-list-filter' => 'ObiProductDataSearchResult.name',
												'rds-list-filter-value' => 'searchPhrase',
												'ng-model' => 'searchPhrase',
												'ng-change' => 'search(searchPhrase)',
												'ng-model-options' => '{debounce: 700}',
												'class' => 'input_search',
												'placeholder' => 'Wpisz numer OBI / numer EAN - aby wyszukać interesujące produkty (minimum 4 znaki)'
											)); ?>
											
											<div class="found">
												<span class="amount">{{productsFound}}</span>
												<span class="text">produktów</span>
											</div>
											
										</div>
									
										<table ng-show="products" app-table-sort="orderBy">
											<thead>
												<tr>
													<th></th>
													<th app-table-sort-by="OrderVariant.name" app-table-sort-by-var="orderBy">Produkt</th>
													<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy">EAN</th>
													<th app-table-sort-by="Project.name" app-table-sort-by-var="orderBy">Kategoria</th>
													<th style="width: 150px"></th>
												</tr>
											</thead>
											<tbody>
												<tr class="product_row" ng-repeat="product in products | orderBy:orderBy">
													<td>
														<img src="/files/products/{{product.ObiProductDataSearchResult.thumb_url}}" onerror="this.onerror=null;this.src='/img/no-image.png';" />
													</td>
													<td>{{product.ObiProductDataSearchResult.name}}</td>
													<td>{{product.ObiProductDataSearchResult.ean}}</td>
													<td>
														<span>
															<em >
																{{product.ObiProductDataSearchResult.category_name}}
															</em>
														</span>
													</td>
													<td><?php echo $this->Html->link('<i class="fa fa-search" aria-hidden="true"></i> zobacz', '/products/p/{{product.ObiProductDataSearchResult.obi_product_id}}', array('escape' => false, 'escapeUrl' => false)); ?></td>
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
