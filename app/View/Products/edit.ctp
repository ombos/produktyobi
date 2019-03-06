<style>

	[rds-input-x-file] .wrapper .drop-zone .preview .info .image > img {
		max-width: 120px !important;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	h2 {
		margin-top: 30px
	}
	
	.number {
		padding-top: 15px;
	}

	.drop-zone {
		border: 0 !important;
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
		margin-bottom: 20px;
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
	
	.text {
		margin-top: 30px;
		text-align: justify;
	}
	
	.files {
		padding-top: 30px;
		text-align: center;
	}
	
	.files span {
		display: block;
	}
	
	.files span.fileCounter {
		position: absolute;
		font-size: 12px;
		top: -5px;
		right: -10px;
		background: #fff;
		padding: 3px;
		border-radius: 100px;
		border: 1px solid #ff7313;
		font-weight: 800;
		font-family: 'Open Sans', sans-serif;
		min-width: 20px;
	}
	
	.files i {
		position: relative;
		font-size: 48px;
	}
	
	.files .folder {
		cursor: pointer;
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-ms-transition: all 0.3s ease 0s;
	}
	.files .folder:hover, .files .folder.active {
		color: #ff7313;
	}
	
	.files .col-md-2 {
		width: 11%;
	}
	
	.folderDiv {
		display: none;
		border-top: 5px solid #ff7313;
		margin-top: 30px;
		padding-top: 30px;
	}
	
	div.checkbox label {
		width: 100% !important;
		text-transform: lowercase !important;
	}
	
	.minifiedBlock {
		position: relative;
		width: 150px;
		height: 150px;
		background-size: contain;
		background-repeat: no-repeat;
		border: 1px solid #ddd;
		background-position: center center;
		overflow: hidden;
		cursor: pointer;
		text-align: center;
		float: left;
		margin: 0 5px 5px 0;
	}
	
	.minifiedBlock .contextMenu {
		position: absolute;
		transform: translateY(50px);
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,0.5);
		width: 100%;
		text-align: center;
		font-size: 11px;
		text-transform: uppercase;
		padding: 5px 0;
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-ms-transition: all 0.3s ease 0s;
	}
	
	.minifiedBlock:hover .contextMenu {
		transform: translateY(0px);
	}
	
	.minifiedBlock:hover .fileName {
		transform: translateY(-30px);
	}
	
	.minifiedBlock .fileName {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		text-align: center;
		background: rgba(255,255,255,0.7);
		transform: translateY(0px);
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-ms-transition: all 0.3s ease 0s;
		font-size: 10px;
	}
	
	.minifiedBlock .contextMenu a {
		color: #fff;
		margin-left: 3px;
		margin-right: 3px;
	}
	
	.minifiedBlock .contextMenu a:hover {
		color: #ff7313;
		text-decoration: none;
	}
	
	.cpPopup {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255,255,255,0.95);
		z-index: 9999;
		padding: 30px;
	}
	
	.cpPopup h1 {
		margin: 0 0 30px 0 !important;
		padding: 0;
	}
	
	.cpPopup .cennik {
		height: 50%;
		overflow-y: scroll;
		padding: 15px;
		background: #fff;
		border: 2px dashed;
		margin-bottom: 30px;
	}
	
	.cpPopup .inst {
		font-size: 15px;
		line-height: 1.5em;
	}
	
	.cpPopup .inst span {
		font-weight: bold;
	}
	
	.orderCreated {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255,255,255,0.95);
		z-index: 9999;
		padding: 30px;
	}
	
	.orderCreated h1 {
		text-align: center;
		color: #006600;
		text-transform: uppercase !important;
		font-size: 26px;
	}
	
	.message { display: none !important; }
	
	label {
		text-transform: inherit;
		font-size: 13px;
	}
	
</style>

<script type="text/javascript">
	function viewDataContainer(container, header) {
		$('.data'+header).toggleClass('open');
		$('.data'+container).slideToggle("fast");
	}
	
	function viewFolder(folder, f) {
	
		if (folder) {
			$('.folderDiv').css('display', 'none');
			$('.folder').removeClass('active');
			
			$('.'+folder).css('display', 'block');
			$('.'+f).addClass('active');
		}
	
	}
	
	function prepareOrder() {
		$('.cpPopup').fadeIn('fast');
	}
	
	function acceptOrder() {
		$('.cpPopup').fadeOut('fast');
		$('.orderCreated').fadeIn('fast');
		setTimeout(function(){
			$('.orderCreated').fadeOut('fast');
		}, 5500);
	}
	
	function declineOrder() {
		$('.cpPopup').fadeOut('fast');
	}
	
</script>

<?php

$counterImage = 0;
$counterAranzacyjne = 0;
$counterPDF = 0;
$counterWideo = 0;
$counterCAD = 0;
$counterWprost = 0;
$counterEdukacyjne = 0;
$counterTiff = 0;
$counterPorady = 0;

if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2))) {
	$readonly = false;
} else {
	$readonly = true;
}

	

if ($product['ObiProductMedia']) {
	foreach ($product['ObiProductMedia'] as $photo) {
		if ($photo['media_type'] == 'image') {
			$counterImage++;
		} else if ($photo['media_type'] == 'aranzacyjne') {
			$counterAranzacyjne++;
		} else if ($photo['media_type'] == 'pdf') {
			$counterPDF++;
		} else if ($photo['media_type'] == 'video') {
			$counterWideo++;
		} else if ($photo['media_type'] == 'cad') {
			$counterCAD++;
		} else if ($photo['media_type'] == 'wprost') {
			$counterWprost++;
		} else if ($photo['media_type'] == 'edukacyjne') {
			$counterEdukacyjne++;
		} else if ($photo['media_type'] == 'tiff') {
			$counterTiff++;
		} else if ($photo['media_type'] == 'porady') {
			$counterPorady++;
		}
	}
}
?>

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
							<h2>Edytuj produkt: <?php echo $product['ObiProduct']['name']; ?></h2>
							
							<?php
							/*
								echo $this->Authorize->link('<i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> '.__(' Zamów do produktów').'</span>',
								array('controller' => 'products', 'action' => 'external'),
								array(
									'escape' => false,
									'class' => 'btn btn-success'
								)); 
							*/
							?>
							
							<div class="row">
								
								<?php echo $this->Form->input('ObiProduct.id', array(
									'value' => $product['ObiProduct']['id']
								)); ?>
								
								<?php echo $this->Form->input('ObiProductDataBasics.id', array(
									'value' => $product['ObiProductDataBasics']['id']
								)); ?>
								
								<?php echo $this->Form->input('ObiProductDataLogistics.id', array(
									'value' => $product['ObiProductDataLogistics']['id']
								)); ?>
								
								<?php echo $this->Form->input('ObiProductDataKartons.id', array(
									'value' => $product['ObiProductDataKartons']['id']
								)); ?>
								
								<?php if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2,9))) { ?>
								
								<div class="col-xs-12">
									<h2 class="dataHeader dataHeaderBasics" onClick="viewDataContainer('Basics', 'HeaderBasics')">Dane podstawowe</h2>
									<div class="dataContainer dataBasics">
										<div class="row">
											<div class="col-xs-12 productStatus">
												Status produktu: 
												
												<?php if ($product['ObiProduct']['active'] == 1) { ?>
													<span style="font-weight: bold; color: #006600"><i class="fa fa-check-circle" aria-hidden="true"></i> aktywny</span>
												<?php }  else if ($product['ObiProduct']['active'] == 0) { ?>
													<span style="font-weight: bold; color: #666666"><i class="fa fa-question-circle" aria-hidden="true"></i> do sprawdzenia</span>
												<?php } else { ?>
													<span style="font-weight: bold; color: #ff0033"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> odrzucony</span>
												<?php } ?>
											</div>
											<div class="col-xs-12">
												<?php echo $this->Form->input('ObiProduct.name', array(
													'type' => 'text',
													'label' => 'Nazwa',
													'class' => 'input_search',
													'placeholder' => 'Wpisz nazwę produktu',
													'value' => $product['ObiProduct']['name'],
												)); ?>
											</div>
											<div class="col-xs-12">
												<?php echo $this->Form->input('ObiProduct.description', array(
													'type' => 'textarea',
													'label' => 'Opis',
													'class' => 'input_search tinymce',
													'placeholder' => 'Opis',
													'value' => $product['ObiProduct']['description'],
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php /*echo $this->Form->input('ObiProductDataBasics.product_producer', array(
													'type' => 'text',
													'label' => 'Producent',
													'class' => 'input_search',
													'placeholder' => 'Wpisz producenta',
													'value' => $product['ObiProductDataBasics']['product_producer']
												));*/ ?>
												<?php echo $this->Form->input('ObiProductDataBasics.product_producer', array(
													'type' => 'select',
													'options' => $obiProducers,
													'empty' => 'Wybierz producenta z listy...',
													'label' => 'Producent',
													'class' => 'input_search',
													'selected' => $product['ObiProductDataBasics']['product_producer']
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php /*echo $this->Form->input('ObiProductDataBasics.product_mark', array(
													'type' => 'text',
													'label' => 'Marka',
													'class' => 'input_search',
													'placeholder' => 'Wpisz markę',
													'value' => $product['ObiProductDataBasics']['product_mark']
												)); */?>
												<?php echo $this->Form->input('ObiProductDataBasics.product_mark', array(
													'type' => 'select',
													'options' => $obiMarks,
													'empty' => 'Wybierz markę z listy...',
													'label' => 'Marka',
													'class' => 'input_search',
													'selected' => $product['ObiProductDataBasics']['product_mark']
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.product_ean', array(
													'type' => 'text',
													'label' => 'EAN',
													'class' => 'input_search',
													'placeholder' => 'Wpisz kod EAN',
													'value' => $product['ObiProductDataBasics']['product_ean'],
													'readonly' => $readonly
												)); ?>
											</div>
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.obi_product_inner_id', array(
													'type' => 'text',
													'label' => 'Numer OBI',
													'class' => 'input_search',
													'placeholder' => 'Wpisz numer OBI',
													'value' => $product['ObiProductDataBasics']['obi_product_inner_id'],
													'readonly' => $readonly
												)); ?>
											</div>
											
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.opis_gr_towarowej', array(
													'type' => 'text',
													'label' => 'Opis grupy towarowej',
													'class' => 'input_search',
													'placeholder' => 'Wpisz opis grupy towarowej',
													'value' => $product['ObiProductDataBasics']['opis_gr_towarowej'],
													'readonly' => $readonly
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.data_rejestracji', array(
													'type' => 'text',
													'label' => 'Data rejestracji',
													'class' => 'input_search',
													'placeholder' => 'Wpisz datę rejestracji produktu',
													'value' => $product['ObiProductDataBasics']['data_rejestracji'],
													'readonly' => $readonly
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProduct.user_id', array(
													'type' => 'select',
													'options' => $producers,
													'empty' => 'Wybierz dostawcę z listy...',
													'label' => 'Dostawca',
													'class' => 'input_search',
													'selected' => $product['ObiProduct']['user_id'],
													'readonly' => $readonly
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductCategory.obi_category_id', array(
													'type' => 'select',
													'options' => $categories,
													'empty' => 'Wybierz kategorię z listy...',
													'label' => 'Kategoria produktu',
													'class' => 'input_search',
													'selected' => $product['ObiProductCategory']['obi_category_id'],
													'readonly' => $readonly
												)); 
												?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.nr_art_dostawcy', array(
													'type' => 'text',
													'label' => 'Numer artykułu dostawcy',
													'class' => 'input_search',
													'placeholder' => 'Wpisz numer artykułu dostawcy',
													'value' => $product['ObiProductDataBasics']['nr_art_dostawcy'],
													'readonly' => $readonly
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.kategoria_wyszukiwania', array(
													'type' => 'text',
													'label' => 'Kategoria wyszukiwania',
													'class' => 'input_search',
													'placeholder' => 'Wpisz kategorię wyszukiwania',
													'value' => $product['ObiProductDataBasics']['kategoria_wyszukiwania'],
													'readonly' => $readonly
												)); ?>
											</div>
											
											<div class="col-xs-6">
												<?php echo $this->Form->input('ObiProductDataBasics.gr_towarowa', array(
													'type' => 'text',
													'label' => 'Grupa towarowa',
													'class' => 'input_search',
													'placeholder' => 'Wpisz grupę towarową',
													'value' => $product['ObiProductDataBasics']['gr_towarowa'],
													'readonly' => $readonly
												)); ?>
											</div>
										</div>
										<div class="row">
											<div class="col-xs-6">
												<label>Data utworzenia</label>
												<?php 
													if (isset($product['ObiProduct']['created'])) {
														echo $product['ObiProduct']['created']; 
													} else {
														echo "<i>Utworzono z importu</i>";
													}
													
												?>
												<br/><br/>
											</div>
											
											<div class="col-xs-6">
												<label>Data modyfikacji</label>
												<?php 
													if (isset($product['ObiProduct']['modified'])) {
														echo $product['ObiProduct']['modified']; 
													} else {
														echo "<i>Utworzono z importu</i>";
													}
													
												?>
												<br/><br/>
											</div>
										</div>
									</div>
									
								</div>
								<div class="col-xs-12">
									<h2 class="dataHeader dataHeaderDimensions" onClick="viewDataContainer('Dimensions', 'HeaderDimensions')">Dane logistyczne</h2>
										
									<div class="dataContainer dataDimensions">
									
										<div class="row">
											<div class="col-xs-4" style="border-right: 1px solid #ff7313">
												<div class="col-xs-12">
													<br/>
													<h3>PRODUKT</h3>
													<?php echo $this->Form->input('ObiProductDataLogistics.product_width', array(
														'type' => 'text',
														'label' => 'Szerokość produktu w mm',
														'class' => 'input_search',
														'placeholder' => 'Wpisz szerokość produktu',
														'value' => $product['ObiProductDataLogistics']['product_width']
													)); ?>
												</div>
												<div class="col-xs-12">
													<?php echo $this->Form->input('ObiProductDataLogistics.product_height', array(
														'type' => 'text',
														'label' => 'Wysokość produktu w mm',
														'class' => 'input_search',
														'placeholder' => 'Wpisz wysokość produktu',
														'value' => $product['ObiProductDataLogistics']['product_height']
													)); ?>
												</div>
												<div class="col-xs-12">
													<?php echo $this->Form->input('ObiProductDataLogistics.product_depth', array(
														'type' => 'text',
														'label' => 'Głębokość produktu w mm',
														'class' => 'input_search',
														'placeholder' => 'Wpisz głębokość produktu',
														'value' => $product['ObiProductDataLogistics']['product_depth']
													)); ?>
												</div>
												<div class="col-xs-12">
													<?php echo $this->Form->input('ObiProductDataLogistics.product_weight', array(
														'type' => 'text',
														'label' => 'Waga produktu w kg',
														'class' => 'input_search',
														'placeholder' => 'Wpisz wagę produktu',
														'value' => $product['ObiProductDataLogistics']['product_weight']
													)); ?>
												</div>
												<div class="col-xs-12">
													<?php echo $this->Form->input('ObiProductDataLogistics.product_package_width', array(
														'type' => 'text',
														'label' => 'Szerokość produktu wraz z opakowaniem jednostkowym w mm',
														'class' => 'input_search',
														'placeholder' => 'Wpisz szerokość produktu wraz z opakowaniem w mm',
														'value' => $product['ObiProductDataLogistics']['product_package_width']
													)); ?>
												</div>
												<div class="col-xs-12">
													<?php echo $this->Form->input('ObiProductDataLogistics.product_package_height', array(
														'type' => 'text',
														'label' => 'Wysokość produktu wraz z opakowaniem jednostkowym w mm',
														'class' => 'input_search',
														'placeholder' => 'Wpisz wysokość produktu wraz z opakowaniem',
														'value' => $product['ObiProductDataLogistics']['product_package_height']
													)); ?>
												</div>
												<div class="col-xs-12">
													<?php echo $this->Form->input('ObiProductDataLogistics.product_package_depth', array(
														'type' => 'text',
														'label' => 'Głębokość produktu wraz z opakowaniem jednostkowym w mm',
														'class' => 'input_search',
														'placeholder' => 'Wpisz głębokość produktu wraz z opakowaniem',
														'value' => $product['ObiProductDataLogistics']['product_package_depth']
													)); ?>
												</div>
												<div class="col-xs-12">
													<?php echo $this->Form->input('ObiProductDataLogistics.product_package_weight', array(
														'type' => 'text',
														'label' => 'Waga produktu wraz z opakowaniem jednostkowym w kg',
														'class' => 'input_search',
														'placeholder' => 'Wpisz wagę produku wraz z opakowaniem w kg',
														'value' => $product['ObiProductDataLogistics']['product_package_weight']
													)); ?>
												</div>
												
												<div class="col-xs-12">
													<button type="button" class="btn btn-success" id="anotherBox" style="display: none">Dodaj kolejne opakowanie</button>
												</div>
												
											</div>
											<div class="col-xs-4" style="border-right: 1px solid #ff7313">
												<br/>
												<h3>NAJMNIEJSZE OPAKOWANIE ZBIORCZE</h3>
												<br/>
												<?php 
												if ($product['ObiProductDataLogistics']['znacznik_set'] == 1) {
													$setDisplay = 'none';
												} else {
													$setDisplay = 'block';
												}
												?>
												<div id="mainKarton" style="display: <?php echo $setDisplay; ?>">
													<div class="row">
														<div class="col-xs-12" style="border: 1px dashed #ccc; width: 94%; left: 3%; right: 3%">
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataKartons.karton_szerokosc', array(
																	'type' => 'text',
																	'label' => 'Szerokość kartonu w mm',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz szerokość kartonu w mm',
																	'value' => $product['ObiProductDataKartons']['karton_szerokosc']
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataKartons.karton_wysokosc', array(
																	'type' => 'text',
																	'label' => 'Wysokość kartonu w mm',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz wysokość kartonu w mm',
																	'value' => $product['ObiProductDataKartons']['karton_wysokosc']
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataKartons.karton_glebokosc', array(
																	'type' => 'text',
																	'label' => 'Głębokość kartonu w mm',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz głębokość kartonu w mm',
																	'value' => $product['ObiProductDataKartons']['karton_glebokosc']
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataKartons.karton_waga', array(
																	'type' => 'text',
																	'label' => 'Waga kartonu w kg',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz wagę kartonu w kg',
																	'value' => $product['ObiProductDataKartons']['karton_waga']
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataKartons.karton_ilosc', array(
																	'type' => 'text',
																	'label' => 'Ilość produktów w kartonie',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz ilość produktów w kartonie',
																	'value' => $product['ObiProductDataKartons']['karton_ilosc']
																)); ?>
															</div>
														</div>
													</div>
													<br/><br/>
												</div>
												<!--<button type="button" class="btn btn-success" ng-click="addNewKarton()">Dodaj kolejny karton</button>-->
												
												<div id="kartons"></div>
												
											</div>
											<div class="col-xs-4">
												<br/>
												<h3>PALETA</h3>
												<br/>
												<div id="mainPaleta">
													<div class="row">
														<div class="col-xs-12" style="border: 1px dashed #ccc; width: 94%; left: 3%; right: 3%">
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataPaleta..paleta_szerokosc', array(
																	'type' => 'text',
																	'label' => 'Szerokość palety w mm',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz szerokość palety w mm',
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataPaleta..paleta_wysokosc', array(
																	'type' => 'text',
																	'label' => 'Wysokość palety w mm',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz wysokość palety w mm',
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataPaleta..paleta_glebokosc', array(
																	'type' => 'text',
																	'label' => 'Głębokość palety w mm',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz głębokość palety w mm',
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataPaleta..paleta_waga', array(
																	'type' => 'text',
																	'label' => 'Waga palety w kg',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz wagę palety w kg',
																)); ?>
															</div>
															
															<div class="col-xs-12">
																<?php echo $this->Form->input('ObiProductDataPaleta..paleta_ilosc', array(
																	'type' => 'text',
																	'label' => 'Ilość sztuk na palecie',
																	'class' => 'input_search',
																	'placeholder' => 'Wpisz ilość sztuk na palecie',
																)); ?>
															</div>
														</div>
													</div>
													<br/><br/>
												</div>
												
												<button type="button" class="btn btn-success" ng-click="addNewPaleta()">Dodaj kolejną paletę</button>
												
												<div id="palets"></div>
											</div>
											
											<div class="col-xs-12">
											
												<div class="col-xs-4">
													<?php echo $this->Form->input('ObiProductDataLogistics.minimalna_szt', array(
														'type' => 'text',
														'label' => 'Minimalna jednostka zamówieniowa w szt',
														'class' => 'input_search',
														'placeholder' => 'Wpisz minimalną jednostkę zamówieniową w szt',
														'value' => $product['ObiProductDataLogistics']['minimalna_szt'],
														'min' => 0
													)); ?>
												</div>
												<div class="col-xs-4">
													<?php echo $this->Form->input('ObiProductDataLogistics.kraj_pochodzenia', array(
														'type' => 'text',
														'label' => 'Kraj pochodzenia',
														'class' => 'input_search',
														'placeholder' => 'Wpisz kraj pochodzenia',
														'value' => $product['ObiProductDataLogistics']['kraj_pochodzenia']
													)); ?>
												</div>
												<div class="col-xs-4">
													<?php echo $this->Form->input('ObiProductDataLogistics.taryfa_celna', array(
														'type' => 'text',
														'label' => 'Taryfa celna',
														'class' => 'input_search',
														'placeholder' => 'Wpisz taryfę celną',
														'value' => $product['ObiProductDataLogistics']['taryfa_celna']
													)); ?>
												</div>
											</div>
											
											<div class="col-xs-12">
												<div class="col-xs-3" title="Artykuł spakowany w więcej niż jeden karton - dodaj kolejne opakowania jednostkowe używając zielonego przycisku 'dodaj kolejne opakowanie' ">
													<?php 
													
													if ($product['ObiProductDataLogistics']['znacznik_set'] == 1) {
														$setChecked = true;
													} else {
														$setChecked = false;
													}
													?>
														 
														<?php
														echo $this->Form->input('ObiProductDataLogistics.znacznik_set', array(
															'type' => 'checkbox',
															'label' => '<i class="fa fa-question-circle" aria-hidden="true" ></i> Znacznik SET',
															'checked' => $setChecked,
															'value' => 1,
															'ng-click' => 'setSign()',
															'class' => 'anotherBox'
														)); ?>

												</div>
											
												<div class="col-xs-3">
													<?php 
													
													if ($product['ObiProductDataLogistics']['dane_zatwierdzone'] == 1) {
														$dzChecked = true;
													} else {
														$dzChecked = false;
													}
													
													if ($product['ObiProductDataLogistics']['adr'] == 1) {
														$adrChecked = true;
													} else {
														$adrChecked = false;
													}
													
													if ($product['ObiProductDataLogistics']['unsafety'] == 1) {
														$unsChecked = true;
													} else {
														$unsChecked = false;
													}
													
													echo $this->Form->input('ObiProductDataLogistics.dane_zatwierdzone', array(
														'type' => 'checkbox',
														'label' => 'Potwierdzam poprawność wyżej wprowadzonych danych logistycznych',
														'checked' => $dzChecked,
														'value' => 1
													)); 
													?>
												</div>
												
												<div class="col-xs-3" title="Pamiętaj by dodać pdf-a w zakładce media z kartą techniczną produktu lub kartą charakterystyki (REACH)">
													<?php echo $this->Form->input('ObiProductDataLogistics.adr', array(
														'type' => 'checkbox',
														'label' => '<i class="fa fa-question-circle" aria-hidden="true" ></i> Towar niebezpieczny (ADR)',
														'value' => 1,
														'checked' => $adrChecked
													)); 
													?>
												</div>
												
												<div class="col-xs-3" title="Pamiętaj by dodać pdf-a w zakładce media z kartą techniczną produktu lub kartą charakterystyki (REACH)">
													<?php echo $this->Form->input('ObiProductDataLogistics.unsafety', array(
														'type' => 'checkbox',
														'label' => '<i class="fa fa-question-circle" aria-hidden="true" ></i> Substancja niebezpieczna',
														'value' => 1,
														'checked' => $unsChecked
													)); 
													?>
												</div>
												
											</div>
										</div>
										<br/><br/><br/>
									</div>
								</div>
								<div class="col-xs-12">
									<!---<h2 class="dataHeader dataHeaderDetails" onClick="viewDataContainer('Details', 'HeaderDetails')">Dane szczegółowe (w budowie)</h2>-->
									
									<div class="dataContainer dataDetails">
										<div style="height: 1px"></div>
										<div class="row">
											<?php
											
												if (!empty($categoryAttrs)) {
												
													foreach ($categoryAttrs as $key => $catData) {
													
														if (isset($product['ObiProductData'][$key]['value'])) {
															$value = $product['ObiProductData'][$key]['value'];
														} else {
															$value = false;
														}
													
														echo "<div class='col-xs-6'>";
														
														echo $this->Form->input('ObiProductData.'.$key.'.obi_category_data_id', array(
															'type' => 'hidden',
															'label' => false,
															'value' => $catData['ObiCategoryData']['id'],
														)); 
														echo $this->Form->input('ObiProductData.'.$key.'.value', array(
															'type' => 'text',
															'label' => $catData['ObiCategoryData']['name'],
															'class' => 'input_search',
															'placeholder' => 'Wpisz wartość',
															'value' => $value,
														)); 
														echo "</div>";
													}
												}
											
											/*
												foreach ($product['ObiProductData'] as $key => $productData) {
													echo $this->Form->input('ObiProductData.'.$key.'.value', array(
														'type' => 'text',
														'label' => $productData[0]['ObiCategoryData']['name'],
														'class' => 'input_search',
														'placeholder' => 'Wpisz wartość',
														'value' => $productData['value'],
													)); 
												}*/
											?>
										</div>
									</div>
									
								</div>
								
								<?php } ?>
								
								<div class="col-xs-12">
									<h2 class="dataHeader dataHeaderMedia" onClick="viewDataContainer('Media', 'HeaderMedia')">Media</h2>
									
									<div class="dataContainer dataMedia">
										
										<div class="files">
											<div class="col-md-2 folder f1" onClick="viewFolder('packshot', 'f1')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterImage; ?></span>
												</i>
												<span>Packshot</span>
											</div>
											<div class="col-md-2 folder f6" onClick="viewFolder('wprost', 'f6')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterWprost; ?></span>
												</i>
												<span>Zdjęcia na wprost produktu</span>
											</div>
											<div class="col-md-2 folder f2" onClick="viewFolder('aranzacyjne', 'f2')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterAranzacyjne; ?></span>
												</i>
												<span>Zdjęcia aranżacyjne</span>
											</div>
											<div class="col-md-2 folder f8" onClick="viewFolder('tiff', 'f8')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterTiff; ?></span>
												</i>
												<span>TIFF</span>
											</div>
											<div class="col-md-2 folder f3" onClick="viewFolder('pdfy', 'f3')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterPDF; ?></span>
												</i>
												<span>Pliki PDF</span>
											</div>
											<div class="col-md-2 folder f4" onClick="viewFolder('produktowe', 'f4')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterWideo; ?></span>
												</i>
												<span>Wideo produktowe</span>
											</div>
											<div class="col-md-2 folder f5" onClick="viewFolder('cady', 'f5')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterCAD; ?></span>
												</i>
												<span>Pliki projektanci</span>
											</div>
											<div class="col-md-2 folder f7" onClick="viewFolder('edukacyjne', 'f7')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterEdukacyjne; ?></span>
												</i>
												<span>Materiały edukacyjne</span>
											</div>
											
											<div class="col-md-2 folder f9" onClick="viewFolder('porady', 'f9')">
												<i class="fa fa-folder" aria-hidden="true">
													<span class="fileCounter"><?php echo $counterPorady; ?></span>
												</i>
												<span>Porady</span>
											</div>
											
										</div>
										
										<div>
											<div class="col-md-12 folderDiv packshot">
												<h3>Katalog: PACKSHOT</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $key => $photo) {
															if ($photo['media_type'] == 'image') {
																?>
																
																<div class="minifiedBlock" style="background-image: url('/files/products/<?php echo $photo['src']; ?>');">
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<a href="/files/products/<?php echo $photo['src']; ?>" data-lightbox="Podgląd" data-title="Podgląd"><i class="fa fa-search" aria-hidden="true"></i> ZOBACZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															} 
														}
													} else { ?>
													<p>Brak plików w katalogu.</p> <?php
													}
												?>
												
											</div>
											<div class="col-md-12 folderDiv aranzacyjne">
												<h3>Katalog: ZDJĘCIA ARANŻACYJNE</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'aranzacyjne') {
																?>
																<div class="minifiedBlock" style="background-image: url('/files/products/<?php echo $photo['src']; ?>');">
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<a href="/files/products/<?php echo $photo['src']; ?>" data-lightbox="Podgląd" data-title="Podgląd"><i class="fa fa-search" aria-hidden="true"></i> ZOBACZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															} 
														}
													} else { ?>
														<p>Brak plików w katalogu.</p> <?php
													}
												?>
												
											</div>
											<div class="col-md-12 folderDiv tiff">
												<h3>Katalog: PLIKI TIFF</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'tiff') {
																?>
																<div class="minifiedBlock" style="background-color: #fff">
																	<i class="fa fa-file-pdf-o" aria-hidden="true" style="font-size: 90px; margin-top: 20px"></i>
																	<span class="fileName"><?php echo $photo['name']; ?></span>
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															} 
														}
													} else { ?>
														<p>Brak plików w katalogu.</p> <?php
													}
												?>
											</div>
											<div class="col-md-12 folderDiv pdfy">
												<h3>Katalog: PLIKI PDF</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'pdf') {
																?>
																<div class="minifiedBlock" style="background-color: #fff">
																	<i class="fa fa-file-pdf-o" aria-hidden="true" style="font-size: 90px; margin-top: 20px"></i>
																	<span class="fileName"><?php echo $photo['name']; ?></span>
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															} 
														}
													} else { ?>
														<p>Brak plików w katalogu.</p> <?php
													}
												?>
											</div>
											<div class="col-md-12 folderDiv produktowe">
												<h3>Katalog: WIDEO PRODUKTOWE</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'video') {
																?>
																<div class="minifiedBlock" style="background-color: #fff">
																	<i class="fa fa-file-video-o" aria-hidden="true" style="font-size: 90px; margin-top: 20px"></i>
																	<span class="fileName"><?php echo $photo['name']; ?></span>
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															}
														}
													} else { ?>
													<p>Brak plików w katalogu.</p> <?php
													}
												?>
											</div>
											<div class="col-md-12 folderDiv cady">
												<h3>Katalog: PLIKI PROJEKTANCI</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'cad') {
																?>
																<div class="minifiedBlock" style="background-color: #fff">
																	<i class="fa fa-file-image-o" aria-hidden="true" style="font-size: 90px; margin-top: 20px"></i>
																	<span class="fileName"><?php echo $photo['name']; ?></span>
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															} 
														}
													} else { ?>
													<p>Brak plików w katalogu.</p> <?php
													}
												?>
											</div>
											
											<div class="col-md-12 folderDiv wprost">
												<h3>Katalog: ZDJĘCIA NA WPROST PRODUKTU</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'wprost') {
																?>
																<div class="minifiedBlock" style="background-image: url('/files/products/<?php echo $photo['src']; ?>');">
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<a href="/files/products/<?php echo $photo['src']; ?>" data-lightbox="Podgląd" data-title="Podgląd"><i class="fa fa-search" aria-hidden="true"></i> ZOBACZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															}
														}
													} else { ?>
													<p>Brak plików w katalogu.</p> <?php
													}
												?>
											</div>
											
											<div class="col-md-12 folderDiv edukacyjne">
												<h3>Katalog: MATERIAŁY EDUKACYJNE</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'edukacyjne') {
																?>
																<div class="minifiedBlock" style="background-color: #fff">
																	<i class="fa fa-book" aria-hidden="true" style="font-size: 90px; margin-top: 20px"></i>
																	<span class="fileName"><?php echo $photo['name']; ?></span>
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															} 
														}
													} else { ?>
													<p>Brak plików w katalogu.</p> <?php
													}
												?>
											</div>
											
											<div class="col-md-12 folderDiv porady">
												<h3>Katalog: PORADY</h3>
												
												<?php
													if (!empty($product['ObiProductMedia'])) {
														
														foreach ($product['ObiProductMedia'] as $photo) {
															if ($photo['media_type'] == 'porady') {
																?>
																<div class="minifiedBlock" style="background-color: #fff">
																	<i class="fa fa-book" aria-hidden="true" style="font-size: 90px; margin-top: 20px"></i>
																	<span class="fileName"><?php echo $photo['name']; ?></span>
																	<div class="contextMenu">	
																		<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																		<br/><a ng-click="deleteMedia(<?php echo $photo['id']; ?>)"><i class="fa fa-trash-o" aria-hidden="true"></i> SKASUJ</a>
																	</div>
																</div>
																<?php
															} 
														}
													} else { ?>
													<p>Brak plików w katalogu.</p> <?php
													}
												?>
											</div>
											
										</div>
										
										<div class="row">
											<div class="col-xs-12" style="margin-top: 60px">
												<h3>Wgraj pliki związane z produktem do odpowiednich katalogów</h3>
											</div>
											<div class="col-xs-12" style="margin-bottom: 60px">
												<p>Proces importowania plików do platformy oraz przypisywania ich do produktów. <br/> Pamiętaj o zachowaniu odpowiedniego wzoru nazw produktów, np: <br/><br/> <strong>450948_3226_1.jpg </strong> <br/>
												<br/>gdzie: pierwszy człon oznacza 6 cyfrowy numer produktu OBI, drugi człon numer dostawcy a ostatni kolejne zdjęcie (jeśli nie ma więcej niż jednego zdjęcia produktu, pomijamy zupełnie ostatni człon nazwy).
											</div>
											
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Zdjęcie produktu lub kilku ujęć produktu na białym tle, według poniższych wytycznych: <br/><br/> <strong>Wymogi techniczne</strong> <ul><li>- Format pliku: .jpg, .tif lub .psd</li><li>- Tryb koloru: RGB (oznaczony profilem koloru ICC) - Profil koloru eciRGB v2</li><li>- Rozmiar pliku: Rozmiar pikseli musi wynosić na jednej stronie co najmniej 1.000 px(wysokość lub szerokość), ponadto należy zachować stosunek 4:3 lub 1:1</li></ul> <br/><strong>Wymogi formalne</strong> <ul><li>- Produkt jest przedstawiony na zdjęciu w miarę wyraźny sposób oraz bez innych elementów (wolnostojący produkt)</li><li>- Profesjonalnie zrobione zdjęcia</li><li> Produkt sfotografowany w sposób dobrze rozpoznawalny i korzystny</li><li>- Produkt znajduje się w środku i jest dobrze oświetlony</li><li> Produkty winny zajmować 80-90 % ekranu</li></ul>"></i> Zdjęcia Packshot</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.image', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Zdjęcie produktu lub grupy produktów np. w aranżacji pomieszczenia, momencie używania produktu. <br/><br/><strong>Wymogi techniczne:</strong> <br/>- Format pliku: .jpg, .tif lub .psd<br/>- Tryb koloru: RGB (oznaczony profilem koloru ICC) - Profil koloru eciRGB v2<br/>- Rozmiar pliku: Rozmiar pikseli musi wynosić na jednej stronie co najmniej 1.000 px (wysokość lub szerokość), ponadto należy zachować stosunek 4:3 lub 1:1"></i> Zdjęcia aranżacyjne</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.aranzacyjne', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Wszelkiego rodzaju pliki formatu PDF W JĘZYKU POLSKIM opisane numerem OBI lub EAN-em, w szczególności: <br/><br/>- Karty techniczne<br/>- Certyfikaty i atesty<br/>- Instrukcje obsługi<br/>- Instrukcje montażu <br/> - Karta charakterystyki (REACH)"></i> Pliki PDF</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.pdf', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Materiały wideo przypisane do danego produktu. W szczególności – prezentujące produkt, ukazujące instrukcje montażu, pokazujące możliwości użytkowania produktu. Format i rozmiar dowolny."></i> Wideo produktowe</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.video', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Pliki 3D produktu pod programy do projektowania wizualizacji pomieszczeń (CAD DECOR)."></i> Pliki projektanci</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.cad', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Zdjęcie produktu lub produktu w opakowaniu na wprost dla potrzeb prezentacji rozmieszczenia produktu na regale sklepowym."></i> Zdjęcia na wprost</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.wprost', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Wszelkiego rodzaju inne materiały o produkcie, które pozwolą lepiej poznać produkt, jego specyfikację np. prezentacje szkoleniowe w power point. Niech przy każdym opisie pojawi się jeszcze przypominajka odnośnie opisywaniu plików: <br/><br/><strong>WAŻNE!</strong><br/><br/>Pamiętaj o zachowaniu odpowiedniego wzoru nazw plików, np:<br/>450948_3226_1.jpg <br/>gdzie: pierwszy człon oznacza 6 cyfrowy numer produktu OBI, drugi człon numer dostawcy aostatni kolejne zdjęcie/plik (jeśli nie ma więcej niż jednego zdjęcia produktu, pomijamy zupełnie ostatni człon nazwy)."></i> Materiały edukacyjne</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.edukacyjne', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Zdjęcie produktu w dużej rozdzielczości na potrzeby prezentacji gazetkowej/reklamowej."></i> TIFF</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.tiff', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
											<div class="col-xs-6 areaBox">
												<div class="col-md-6"><i class="fa fa-question-circle" aria-hidden="true" title="Pliki z poradami"></i> Porady</div>
												<div class="col-md-6 dropArea">
													<?php echo $this->Form->input('ObiProductMedia.files.porady', array(
														'label' => false,
														'type' => 'x-file', 
														'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
														'maxFiles' => 99
													)); ?>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<br/><br/>
							<div class="row">
								<div class="col-md-4">
									<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
									
									<?php
									
										if ($this->Authorize->isAllowed(AuthComponent::user('id'), array(1,2))) {
											if ($product['ObiProduct']['active'] == 1) {
												?><button type="button" class="btn btn-default"> Dezaktywuj produkt </button><?php
											} else if ($product['ObiProduct']['active'] == 0) {
												?>
													<button type="button" class="btn btn-success"> Aktywuj produkt </button>
													<button type="button" class="btn btn-danger"> Odrzuć produkt </button>
												<?php
											} else {
												?>
												<button type="button" class="btn btn-success"> Aktywuj produkt </button>
												<?php
											}
										}
										
									?>
									
								</div>
							</div>
							<?php echo $this->Form->end(); ?>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
