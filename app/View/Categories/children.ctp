<style>

	a {
		color: #000;
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
		max-width: 60px;
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
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						
						<h1>Zarządzanie kategoriami</h1>
					
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
										rds-list-url="/categories/filter_index/<?php echo $categoryId; ?>"
										rds-list-items="categories"
										rds-list-filter-call="reload"
										rds-list-submit="message = null; loading = true"
										rds-list-success="loading = false; productsFound= products.length"
										rds-list-fault="message = errorMessage; messageType = 'danger'; loading = false"
									>
										<table ng-show="categories" app-table-sort="orderBy">
											<thead>
												<tr>
													<th app-table-sort-by="OrderVariant.name" app-table-sort-by-var="orderBy">Nazwa kategorii</th>
													<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy">Liczba podkategorii głównych</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr class="product_row" ng-repeat="category in categories | orderBy:orderBy">
													<td>{{category.ObiCategory.name}}</td>
													<td><strong>17</strong> podkategorii</td>
													<td style="width: 300px">
														<?php echo $this->Html->link('<i class="fa fa-search" aria-hidden="true"></i> edytuj', '/categories/edit/{{category.ObiCategory.id}}', array('escape' => false, 'escapeUrl' => false)); ?>
														<?php echo $this->Html->link('<i class="fa fa-search" aria-hidden="true"></i> podkategorie', '/categories/children/{{category.ObiCategory.id}}', array('escape' => false, 'escapeUrl' => false)); ?>
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
</div>