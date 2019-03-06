<style>

	[rds-input-x-file] .wrapper .drop-zone .preview .info .image > img {
		max-width: 120px !important;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	h2 {
		margin-top: 30px
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
		width: 12.50%;
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
	}
	
</style>

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
							<?php echo $this->Form->create('ObiProducer', array(
									'ajax' => true,
									'validationUrl' => 'obi_producers/validate_add',
									'submit' => 'message = null; loading = true',
									'success' => 'Util.redirect(response.data.redirect)',
									'error' => 'loading = false',
									'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
								)); ?>
							
							<h2>Edytuj producenta: </h2>
							
							<div class="row">
								<div class="col-xs-12">
									
									<?php echo $this->Form->input('ObiProducer.name', array(
										'type' => 'text',
										'label' => 'Nazwa',
										'class' => 'input_search',
										'placeholder' => 'Wpisz nazwę producenta',
										'value' => $producerData['ObiProducer']['name']
									)); ?>
								</div>	
								<div class="col-xs-12">
									<?php echo $this->Form->submit(__('Zapisz'), array('class' => 'btn btn-success')); ?>
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
