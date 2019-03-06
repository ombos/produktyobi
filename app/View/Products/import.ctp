<style>
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
	
	.x-file {
		padding: 0;
		margin: 0 0 20px 0;
	}
	
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
							<div class="row">
								<div class="col-xs-12">
									<h3>Instrukcja korzystania z modułu Import / Eksport</h3>
									<p>Krok 1. - Pobierz plik Excel z listą swoich produktów do wypełnienia (skorzystaj z opcji "EKSPORT").</p>
									<p>Krok 2. - Wypełnij plik Excel zgodnie z kolejnością kolumn oraz dostępnymi polami.</p>
									<p>Krok 3. - Zaimportuj uzupełniony plik Excel używając opcji "IMPORT".</p>
									<p>Krok 4. - Zaimportuj media korzystając z opcji "IMPORT MEDIÓW". Pamiętaj, aby przesyłać zapakowane pliki tylko w formacie <strong>.zip</strong>.</p>
										<br/><br/><br/>
								</div>
							</div>
						
							<div class="row">
								<div class="col-xs-4" style="padding-right: 40px">
									<h2>Import produktów</h2>
									<p>Proces importowania produktów z pliku Excel (.xlsx). Proszę pamiętać o zachowaniu odpowiedniego układu kolumn wewnątrz pliku. <br/><u>Zmiana kolejności kolumn w pliku excel może doprowadzić do nieprawidłowego zaimportowania danych.</u></p>
										<br/>
									
									<?php echo $this->Form->create('ObiProduct', array(
										'url' => '/products/import_products',
										'ajax' => true,
										'validationUrl' => 'products/validate_add',
										'submit' => 'message = null; loading = true',
										'success' => 'Util.redirect(response.data.redirect)',
										'error' => 'loading = false',
										'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
									)); ?>
									
									<?php echo $this->Form->input('ObiProductMedia.files', array(
										'label' => false,
										'type' => 'x-file', 
										'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
										'maxFiles' => 1,
										'ng-model' => 'productsFile',
										'required' => true
									)); ?>
									
									<?php echo $this->Form->submit(__('Rozpocznij import'), array('class' => 'btn btn-success')); ?>
									<?php echo $this->Form->end(); ?>
									
								</div>
								
								<div app-speed-check class="col-xs-4" style="border-left: 3px solid #ff7313; border-right: 3px solid #ff7313; padding-left: 40px; padding-right: 40px">
									
									<div id="mediaImportPopup" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.95); padding: 50px; text-align: center; z-index: 1; display: none;">
										<h1>Trwa import mediów, proszę czekać...</h1>
										<div>
											<p style="font-size: 24px">Przewidywany czas do zakończenia: <strong id="timeToEnd">0</strong> min</p>
											<p style="font-size: 18px">Prędkość przesyłania danych: <strong id="uploadSpeed"></strong> kb/s</p>
										</div>
									</div>
									
									<h2>Import mediów</h2>
									<p>Proces importowania zdjęć do platformy oraz przypisywania ich do produktów. <br/> Pamiętaj o zachowaniu odpowiedniego wzoru nazw produktów, np: <br/><br/> <strong>450948_3226_1.jpg </strong> <br/>
									<br/>gdzie: pierwszy człon oznacza 6 cyfrowy numer produktu OBI, drugi człon numer dostawcy a ostatni kolejne zdjęcie (jeśli nie ma więcej niż jednego zdjęcia produktu, pomijamy zupełnie ostatni człon nazwy). Pamiętaj też, że wszystkie zdjęcia muszą obowiązkowo być zapakowane w paczce o rozszerzeniu <strong>.zip</strong> w przeciwnym razie system niezaimportuje mediów.</p>
									<br/> W paczce .zip powinny znaleźć się <u>tylko</u> pliki mediów (bez umieszczania ich w katalogi).
									<br/><br/>
										
									<?php 
										$mediaOptions = array(
											'image' => 'Packshot',
											'wprost' => 'Zdjęcia na wprost produktu',
											'aranzacyjne' => 'Zdjęcia aranżacyjne',
											'TIFF' => 'TIFF',
											'pdf' => 'Pliki PDF',
											'video' => 'Wideo produktowe',
											'cad' => 'Pliki projektanci',
											'edukacyjne' => 'Materiały edukacyjne',
											'porady' => 'Porady'
										);
									?>	
										
									<?php echo $this->Form->create('ObiProductMedia', array(
										'ajax' => true,
										'url' => '/products/import_media',
										'validationUrl' => 'products/validate_add',
										'submit' => 'message = null; loading = true',
										'success' => 'Util.redirect(response.data.redirect)',
										'error' => 'loading = false',
										'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
									)); ?>
									
									<?php echo $this->Form->input('ObiProductMedia.media_type', array(
										'type' => 'select',
										'options' => $mediaOptions,
										'empty' => 'Wybierz z listy...',
										'label' => 'Wybierz folder (kategorię), do którego będziesz importować produkty:',
										'class' => 'input_search',
									)); 
									?>
									
									<?php echo $this->Form->input('ObiProductMedia.media', array(
										'label' => false,
										'type' => 'x-file', 
										'buttonLabel' => __('Przeciągnij i upuść pliki na tym obszarze'),
										'maxFiles' => 1,
										'ng-model' => 'productsMedia',
										'required' => true
									)); ?>
									
									<?php echo $this->Form->submit(__('Rozpocznij import'), array('class' => 'btn btn-success', 'ng-click' => 'startImportWithProgress()')); ?>
									<?php echo $this->Form->end(); ?>
								</div>
								
								<div class="col-xs-4" style="padding-left: 40px">
									<h2>Eksport produktów</h2>
									<p>Proces eksportowania produktów do pliku Excel (.xlsx). Uzupełniony plik Excel należy następnie zaimportować.</p>
										<br/>
									<div id="messageExport" style="display: none; background: #eaeaea; padding: 10px 20px; text-align: center;">Trwa eksport produktów, proszę czekać...</div>
										<br />
									<button type="button" class="btn btn-success" ng-click="startProductExport()">Rozpocznij eksport</button>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
