<style>

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
		<?php echo $this->element('categories_navigation'); ?>
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div app-categories-list ng-init="wrapperParams = {}">
							<div
								rds-modal
								rds-modal-open="openModal"
								rds-modal-positive-label="<?php echo __('Tak'); ?>"
								rds-modal-positive-action="deleteCategory()"
								rds-modal-negative-label="<?php echo __('Anuluj'); ?>"
							>
								<?php echo __('Czy na pewno chcesz skasować tę kategorię ?'); ?>
							</div>
							<h1>Zarządzanie kategoriami</h1>

							<div
								rds-wrapper
								rds-wrapper-loading="loading"
								rds-wrapper-message="message"
								rds-wrapper-message-type="messageType"
							>
								<div
									class="advanced-list"
									rds-list
									rds-list-url="/categories/filter_index"
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
												<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy">Grupa</th>
												<th app-table-sort-by="User.name" app-table-sort-by-var="orderBy">Numer OBI</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr class="product_row" ng-repeat="category in categories | orderBy:orderBy">
												<td>{{category.ObiCategory.name}}</td>
												<td>{{category.ObiCategory.obi_group_id}}</td>
												<td>{{category.ObiCategory.obi_inner_category_id}}</td>
												<td style="width: 300px">
													<?php echo $this->Html->link('<i class="fa fa-search" aria-hidden="true"></i> edytuj', '/categories/edit/{{category.ObiCategory.id}}', array('escape' => false, 'escapeUrl' => false, 'class' => 'btn')); ?>
													<a  ng-click="deleteCategory(category)" class="btn"><i class="fa fa-trash-o" aria-hidden="true"></i><?php echo __(' Skasuj'); ?></a>
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