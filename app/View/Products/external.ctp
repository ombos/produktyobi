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
	
	.files {
		margin-top: 30px;
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
		width: 14.28%;
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
	
	.checkbox {
		width: 100% !important;
		float: none !important;
		position: relative !important;
		top: 3px !important;
	}
	
	table tbody tr:nth-child(odd) {
		background: #f5f5f5 !important;
	}
	
	table tbody tr:nth-child(even) {
		background: #fff !important;
	}
	
	table tbody tr:hover {
		background: #ff7313 !important;
		color: #fff;
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
							<?php echo $this->Form->create('ObiProduct', array(
								'ajax' => true,
								'validationUrl' => 'products/validate_add',
								'submit' => 'message = null; loading = true',
								'success' => 'Util.redirect(response.data.redirect)',
								'error' => 'loading = false',
								'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
							)); ?>
							<h2>Zamów do produktów</h2>
							
							<div class="row">
								<div class="col-xs-12" style="background: #f5f5f5; padding: 20px 0px 20px 20px; margin-left: 15px; margin-right: -20px; margin-bottom: 20px;">
									Dzięki platformie Content Pro, możesz zamówić dodatkowe usługi i treści do Twoich artykułów. Proces składania i przetwarzania jest w pełni automatyczny i intuicyjny. Zachęcamy do zapoznania się z instrukcją.
								</div>
							</div>
							
							<div class="row">
								<div class="col-xs-12">
									<strong>1.</strong> Wybierz interesujące Cię produkty z listy po lewej stronie oraz usługi z listy po prawej stronie, jakie chcesz zamówić do wybranych produktów. <br/>
									<strong>2.</strong> Następnie kliknij przycisk "Złóż zamówienie". <br/>
									<strong>3.</strong> Zostanie utworzone zamówienie w platfomie ContentPro. <br/>
									<strong>4.</strong> Po przygotowaniu zamówienia, dane związane z Twoimi produktami zostaną zaktualizowane.
									
									<br/><br/>
									<p style="font-size: 10px">Powered by &nbsp;&nbsp; <img src="https://contentpro.pl/s/img/layout/cp_logo.png" style="max-height: 15px" /></p>
									
								</div>
								<div class="col-xs-6">
									<br/><br/>
									<h3>Twoja lista produktów</h3>
								</div>
								<div class="col-xs-6">
									<br/><br/>
									<h3>Dostępne usługi</h3>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-6">
									<?php if($products): ?>
										<div style="height: 800px; overflow-y: scroll;">
											<table>
												<tbody>
													<tr>
														<td><strong>Produkt</strong></td>
														<td ><strong>Status</strong></td>
													</tr>
													
													<?php foreach ($products as $value) { ?>													
														<tr>
															<td>
																<?php
																	$productValue = $value['ObiProduct']['id'] .'/'. $value['ObiProduct']['user_id'];
																	
																	if (empty($value['ConnOrder'])) {
																		$disabled = false;
																	} else {
																		$disabled = true;
																	}
																	
																	echo $this->Form->input('ExternalProduct.products.', array(
																		'multiple' => 'checkbox',
																		'options' => array(
																			$productValue => $value['ObiProduct']['name']
																		),
																		'label' => false,
																		'disabled' => $disabled
																	));
																	
																	?>
															</td>
															<td>
																<?php
																	if (!empty($value['ConnOrder'])) {
																		echo "<span style='font-size: 10px; text-transform: uppercase'>".$value['ConnOrder']['ConnOrder']['element_status']."</span>";
																		if (!empty($value['ConnOrder']['ConnOrder']['cp_order_number'])) {
																				echo "<br/><span style='font-size: 10px; text-transform: uppercase'>Zam. Nr. <strong>".$value['ConnOrder']['ConnOrder']['cp_order_number']."</strong></span>";
																		}
																	}
																?>
															</td>
														</tr>
													<?php } ?>
													
												</tbody>
											</table>
										</div>
									
									<?php else: ?>
										<i>Brak produktów</i>
									<?php endif; ?>
									
								</div>
								<div class="col-xs-6">
									
									<br/><br/>
									<h4>Usługi podstawowe</h4>
									
									<table>
										<tbody>
											<tr >
												<td></td>
												<td ><strong>Orientacyjna cena</strong></td>
												<td ><strong>Opis usługi</strong></td>
											</tr>
											<tr>
												<td>
													<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
														'multiple' => 'checkbox',
														'options' => array(
															'Opis produktu' => 'Opis produktu'
														),
														'label' => false
													)); ?>
												</td>
												<td  >20,00 zł</td>
												<td  >min 80 sł&oacute;w (około 650 zzs)/min 2 słowa kluczowe</td>
											</tr>
											<tr>
												<td>
													<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
														'multiple' => 'checkbox',
														'options' => array(
															'Opis kategorii' => 'Opis kategorii'
														),
														'label' => false
													)); ?>
												</td>
												<td  >20,00 zł</td>
												<td  >min 80 sł&oacute;w (około 650 zzs)/min 2 słowa kluczowe</td>
											</tr>
											<tr>
												<td>
													<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
														'multiple' => 'checkbox', 
														'options' => array(
															'Zakup zdjęć' => 'Zakup zdjęć'
														),
														'label' => false
													)); ?>
												</td>
												<td  >10,00 zł</td>
												<td  >zakup zdjęć przez accesspro - dostarczone wraz z artykułem</td>
											</tr>
										</tbody>
									</table>
									
									<br/><br/>
									<h4>Usługi dodatkowe</h4>
									<div style="height: 500px; overflow-y: scroll">
										<table>
											<tbody>
												<tr >
													<td></td>
													<td ><strong>Orientacyjna cena</strong></td>
													<td ><strong>Opis usługi</strong></td>
												</tr>
												<tr >
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Audyt Content_SEO' => 'Audyt Content_SEO'
															),
														)); ?>
													</td>
													<td  >1 500,00 zł</td>
													<td  >audyt contentowy dla serwisu Internetowego bez specjalnych funkcjonalności z ilością podstron do 1000/czas realizacji do 3 dni roboczych</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Audyt Content_SEO > 1000 podstron' => 'Audyt Content_SEO > 1000 podstron'
															),
														)); ?>
													</td>
													<td  >5 000,00 zł</td>
													<td  >powyżej 1000 podstron - czas realizacji do 5 dni roboczych</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Audyt SEO' => 'Audyt SEO'
															),
														)); ?>
													</td>
													<td  >2 000,00 zł</td>
													<td  >analiza domeny wg wytycznych Google - czas realizacji do 5 dni roboczych</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'WOMM' => 'WOMM'
															),
														)); ?>
													</td>
													<td  >7,00 zł</td>
													<td  >wpisy z linkiem/min 70% link&oacute;w nie zostaje usunieta/konta z historią od 2006 roku/ponad 10000 profili na kilku tysiącach for&oacute;w/raporty w excelu</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Socialmedia (FB, IN, G+)' => 'Socialmedia (FB, IN, G+)'
															),
														)); ?>
													</td>
													<td  >7,00 zł</td>
													<td  >wpisy na FB</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Lajki' => 'Lajki'
															),
														)); ?>
													</td>
													<td  >2,00 zł</td>
													<td  >znaczenie wpisu, zdjęcia itp. w serwisie społecznościowym</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Komplet TD' => 'Komplet TD'
															),
														)); ?>
													</td>
													<td  >5,00 zł</td>
													<td  >min 200 zzs</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Opis na YT' => 'Opis na YT'
															),
														)); ?>
													</td>
													<td  >150,00 zł</td>
													<td  >transkrypacja 1 godzina lub min 1000 zzs/min 5 sł&oacute;w kluczowych (w tym 1 w tytule)/min 2 linki/min 2 anchory</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Tekst ekspercki z przypisami' => 'Tekst ekspercki z przypisami'
															),
														)); ?>
													</td>
													<td  >250,00 zł</td>
													<td  >min 500 sł&oacute;w (około 3500 - 4000 zzs)/min 5 sł&oacute;w kluczowych (w tym 1 w tytule)/min 2 linki/min 2 anchory</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Tekst poradnikowy' => 'Tekst poradnikowy'
															),
														)); ?>
													</td>
													<td  >120,00 zł</td>
													<td  >min 500 sł&oacute;w (około 3500 - 4000 zzs)/min 5 sł&oacute;w kluczowych (w tym 1 w tytule)/min 2 linki/min 2 anchory</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Tekst lifstyle' => 'Tekst lifstyle'
															),
														)); ?>
													</td>
													<td  >90,00 zł</td>
													<td  >min 500 sł&oacute;w (około 3500 - 4000 zzs)/min 5 sł&oacute;w kluczowych (w tym 1 w tytule)/min 2 linki/min 2 anchory</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Keywording' => 'Keywording'
															),
														)); ?>
													</td>
													<td  >40,00 zł</td>
													<td  >przygotowanie na podstawie popularnych fraz propozycji tytułu wraz z listą słow&oacute;w kluczowych</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Korekta językowa' => 'Korekta językowa'
															),
														)); ?>
													</td>
													<td  >10,00 zł</td>
													<td  >min 500 sł&oacute;w (około 3500 - 4000 zzs)</td>
												</tr>
												
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Dob&oacute;r zdjęć przez autora' => 'Dob&oacute;r zdjęć przez autora'
															),
														)); ?>
													</td>
													<td  >5,00 zł</td>
													<td  >propozycja zdjęcia do pisanego artykułu - zakup zdjęć po stronie klienta</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Infografiki' => 'Infografiki'
															),
														)); ?>
													</td>
													<td  >400 zł - 800 zł</td>
													<td  >przygotowanie infografik do tekst&oacute;w - koszt zależny od wielkości grafiki</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Scenariusz do infografiki' => 'Scenariusz do infografiki'
															),
														)); ?>
													</td>
													<td  >50,00 zł</td>
													<td  >Przygotowanie scenariusza do infografiki</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Umieszczanie link&oacute;w w tekstach' => 'Umieszczanie link&oacute;w w tekstach'
															),
														)); ?>
													</td>
													<td  >0,10 zł</td>
													<td  >wprowadzanie link&oacute;w do tekst&oacute;w w odpowiednim kontekście</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Publikacje na witrynach zewnętrznych' => 'Publikacje na witrynach zewnętrznych'
															),
														)); ?>
													</td>
													<td colspan="2" ><span > koszt</span><span style="color: windowtext; font-size: 11pt; font-weight: 400; font-style: normal; font-family: Calibri;"> publikacji uzależniony od przygotowanej oferty bądź budżetu klienta</span></td>
													</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Wsp&oacute;łpraca z blogerami/vlogerami' => 'Wsp&oacute;łpraca z blogerami/vlogerami'
															),
														)); ?>
													</td>
													<td colspan="2" ><span > koszt</span><span style="color: windowtext; font-size: 11pt; font-weight: 400; font-style: normal; font-family: Calibri;"> uzależniony od przygotowanej oferty bądź budżetu klienta</span></td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Budowa stron internetowych' => 'Budowa stron internetowych'
															),
														)); ?>
													</td>
													<td colspan="2" ><span > koszt</span><span style="color: windowtext; font-size: 11pt; font-weight: 400; font-style: normal; font-family: Calibri;"> uzależniony od przygotowanej rekomendacji bądź budżetu klienta</span></td>
												</tr>
												<tr >
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Grafiki do kampanii - Master/Przeformatowanie' => 'Grafiki do kampanii - Master/Przeformatowanie'
															),
														)); ?>
													</td>
													<td  >450 zł/150 zł</td>
													<td  >Przygotowujemy materiały graficzne do kampanii reklamowych w sieci i socialmedia<br />W formatach HTML5, JPG, PNG, GIF</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Kampanie adwords' => 'Kampanie adwords'
															),
														)); ?>
													</td>
													<td  >15% prowizja agencyjna</td>
													<td  >koszt uzależniony od przygotowanej rekomendacji bądź budżetu klienta</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Kampanie rekomendacji treści' => 'Kampanie rekomendacji treści'
															),
														)); ?>
													</td>
													<td  >rozliczenia CPC</td>
													<td  >koszt uzależniony od przygotowanej oferty bądź budżetu klienta</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Prowadzenie FB' => 'Prowadzenie FB'
															),
														)); ?>
													</td>
													<td colspan="2" ><span > koszt</span><span style="color: windowtext; font-size: 11pt; font-weight: 400; font-style: normal; font-family: Calibri;"> uzależniony od przygotowanej rekomendacji bądź budżetu klienta</span></td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Tłumaczenia (lokalizacja treści)' => 'Tłumaczenia (lokalizacja treści)'
															),
														)); ?>
													</td>
													<td  >70,00 zł</td>
													<td  >1000 znak&oacute;w: DE, EN, ESP, I, RU, FR, ROU, HUN/pozostałe języki do ustalenia</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'PM &ndash; jego koszt m-c' => 'PM &ndash; jego koszt m-c'
															),
														)); ?>
													</td>
													<td  >800,00 zł</td>
													<td  >Obsługa contentowa serwisu. Optymalizacja tekst&oacute;w na stronie - grafiki zdjęcia. Wprowadzanie poprawek.</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Obsługa SEO' => 'Obsługa SEO'
															),
														)); ?>
													</td>
													<td  >1 200,00 zł</td>
													<td  >Analiza i rekomendacje optymalizacji serwisu, analiza linkowania, rekomendacje SEO</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Hosting' => 'Hosting'
															),
														)); ?>
													</td>
													<td  >100,00 zł</td>
													<td  >Udostępnienie powierzchni dyskowej pod stronę</td>
												</tr>
												<tr>
													<td>
														<?php echo $this->Form->input('ExternalProduct.pricelist.', array(
															'multiple' => 'checkbox', 
															'label' => false,
															'options' => array(
																'Usługa utrzymaniowa' => 'Usługa utrzymaniowa'
															),
														)); ?>
													</td>
													<td>400,00 zł</td>
													<td>1. Wykonywanie regularnych, codziennych kopii bezpieczeństwa bazy danych<br />2. Prowadzenie wersjonowania i dokumentacji technicznej<br />3. Przechowywanie bezpiecznej kopii kodu źr&oacute;dłowego<br />4. Niezbędne do prawidłowego funkcjonowania platformy aktualizacje komponent&oacute;w  <br />5. Reakcje na zgłoszenia dotyczące zawartości / treści platformy, kt&oacute;re mogą̨ być wykonane tylko w drodze technicznej ingerencji w bazę̨ danych bądź kod źr&oacute;dłowy a nie wynikają z wad platformy. Czas reakcji na zgłoszenie to 1 dzień roboczy, chyba że zakres interwencji wymagać będzie ustalenia konkretnego terminu jego realizacji.</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-xs-12">
									<br/><br/>
									<?php echo $this->Form->submit(__('Złóż zamówienie'), array('class' => 'btn btn-success')); ?>
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
