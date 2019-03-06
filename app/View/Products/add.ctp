<style>

	h2 {
		margin-top: 30px
	}

	.tabs .tab {
		text-transform: uppercase;
		background: #aaa;
		padding: 8px 10px;
		text-align: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 2px;
		border-left: 2px solid #fff;
		font-weight: 600;
		font-size: 13px;
		cursor: pointer;
		box-shadow: inset 0px 2px 7px #ccc;
		-moz-box-shadow: inset 0px 2px 7px #ccc;
		-webkit-box-shadow: inset 0px 2px 7px #ccc;
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-ms-transition: all 0.3s ease 0s;
	}
	
	.tabs .tab:first-of-type {
		border-left: 0;
	}
	
	.tabs .tab:hover, .tabs .tab.selected {
		color: #fff;
		background: #ff7313;
	}
	
	.details {
		padding-top: 50px;
	}
	
	.details table tr td {
		width: 50%;
	}
	
	.details table tr:nth-child(odd) {
		background: #fff !important;
	}
	
	.details table tr:nth-child(even) {
		background: #f0f0f0 !important;
	}
	
	.details table tr td {
		font-size: 13px;
	}
	
	.gallery {
		clear: both;
	}
	
	.gallery .galleryElement {
		width: 60px;
		height: 60px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		float: left;
		border: 1px solid #aaa;
		margin: 1px;
		cursor: pointer;
	}
	
	.gallery .mainImage {
		border: 1px solid #aaa;
	}
	
	.gallery .mainImage img {
		width: 100%;
		height: auto;
	}
	
	.gallery .downloadPdf {
		text-transform: uppercase;
		color: #888;
		font-size: 11px;
		clear: both;
		font-weight: bold;
	}
	
	.description h1 {
		padding: 0;
		margin: 0 0 15px 0;
	}
	
	.productCategory {
		font-weight: bold;
		text-transform: uppercase;
		font-size: 14px;
		color: #888;
	}
	
	.galleryElement {
		width: 60px;
		height: 60px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		float: left;
		border: 1px solid #aaa;
		margin: 1px;
		cursor: pointer;
	}
	
	.dropArea {
		background: #ddd;
		border: 1px dashed #666;
		padding: 20px;
		text-align: center;
		color: #333;
		cursor: pointer;
	}
	
	.areaBox {
		margin-top: 20px;
	}
	
	.dataContainer {
		display: none;
		padding: 0 10px;
		border-left: 1px solid #ff7313;
		border-right: 1px solid #ff7313;
		border-bottom: 1px solid #ff7313;
	}
	
	.dataHeader {
		cursor: pointer;
		margin: 10px 0 0 0;
		color: #fff;
		background: #333;
		text-transform: uppercase;
		font-size: 18px;
		padding: 10px 10px;
		position: relative;
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-ms-transition: all 0.3s ease 0s;
	}
	
	.dataHeader:hover, .dataHeader.open {
		background: #ff7313;
	}
	
	.productStatus {
		font-size: 18px;
		margin-top: 15px;
	}
	
</style>

<script type="text/javascript">
	function viewDataContainer(container, header) {
		$('.data'+header).toggleClass('open');
		$('.data'+container).slideToggle("fast");
	}
</script>

<div class="profile change_password">
	<div class="view-wrapper">
		<?php echo $this->element('products_navigation'); ?>
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
							<?php echo $this->Form->create('ObiProduct', array(
									'ajax' => true,
									'validationUrl' => 'products/validate_add',
									'submit' => 'message = null; loading = true',
									'success' => 'Util.redirect(response.data.redirect)',
									'error' => 'loading = false',
									'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
								)); ?>
							<h2>Dodaj produkt:</h2>
							<div class="row">
								
								<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,9))) { ?>
								
								<div class="col-xs-12">
									<h2 class="dataHeader dataHeaderBasics open" onClick="viewDataContainer('Basics', 'HeaderBasics')">Dane podstawowe</h2>
									<div class="dataContainer dataBasics" style="display: block">
										<div class="row">
											<div class="col-xs-12">
												<?php echo $this->Form->input('ObiProduct.name', array(
													'type' => 'text',
													'label' => 'Nazwa',
													'class' => 'input_search',
													'placeholder' => 'Wpisz nazwę produktu',
												)); ?>
											</div>
											<div class="col-xs-12">
												<?php echo $this->Form->input('ObiProduct.description', array(
													'label' => 'Opis',
													'class' => 'input_search tinymce',
													'placeholder' => 'Opis',
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.product_producer', array(
													'type' => 'select',
													'options' => $obiProducers,
													'empty' => 'Wybierz producenta z listy...',
													'label' => 'Producent',
													'class' => 'input_search',
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.product_mark', array(
													'type' => 'select',
													'options' => $obiMarks,
													'empty' => 'Wybierz markę z listy...',
													'label' => 'Marka',
													'class' => 'input_search',
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.product_ean', array(
													'type' => 'text',
													'label' => 'EAN',
													'class' => 'input_search',
													'placeholder' => 'Wpisz kod EAN',
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.obi_product_inner_id', array(
													'type' => 'text',
													'label' => 'Numer OBI',
													'class' => 'input_search',
													'placeholder' => 'Wpisz numer OBI',
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.opis_gr_towarowej', array(
													'type' => 'text',
													'label' => 'Opis grupy towarowej',
													'class' => 'input_search',
													'placeholder' => 'Wpisz opis grupy towarowej',
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.data_rejestracji', array(
													'type' => 'text',
													'label' => 'Data rejestracji',
													'class' => 'input_search',
													'placeholder' => 'Wpisz datę rejestracji produktu',
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProduct.user_id', array(
													'type' => 'select',
													'options' => $producers,
													'empty' => 'Wybierz dostawcę z listy...',
													'label' => 'Dostawca',
													'class' => 'input_search',
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductCategory.obi_category_id', array(
													'type' => 'select',
													'options' => $categories,
													'empty' => 'Wybierz kategorię z listy...',
													'label' => 'Kategoria produktu',
													'class' => 'input_search',
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.nr_art_dostawcy', array(
													'type' => 'text',
													'label' => 'Numer artykułu dostawcy',
													'class' => 'input_search',
													'placeholder' => 'Wpisz numer artykułu dostawcy',
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.kategoria_wyszukiwania', array(
													'type' => 'text',
													'label' => 'Kategoria wyszukiwania',
													'class' => 'input_search',
													'placeholder' => 'Wpisz kategorię wyszukiwania',
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.gr_towarowa', array(
													'type' => 'text',
													'label' => 'Grupa towarowa',
													'class' => 'input_search',
													'placeholder' => 'Wpisz grupę towarową',
												)); ?>
											</div>
											
										</div>
									</div>
								</div>
								<?php } ?>
								
								
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
