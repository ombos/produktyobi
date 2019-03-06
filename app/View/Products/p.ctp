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
	
</style>

<script type="text/javascript">

	function viewFolder(folder, f) {
	
		if (folder) {
			$('.folderDiv').css('display', 'none');
			$('.folder').removeClass('active');
			
			$('.'+folder).css('display', 'block');
			$('.'+f).addClass('active');
		}
	
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
								<div class="col-md-2 gallery">
									<div style="clear: both;">
										<div class="mainImage">
										
											<?php 
											
											if (isset($product['ObiProductMedia'])&& !empty($product['ObiProductMedia'])) {
											
												$found = false;
											
												foreach ($product['ObiProductMedia'] as $key => $value) {
													if ($value['media_type'] == 'image') {
														?><a href="/files/products/<?php echo $value['src']; ?>" data-lightbox="<?php echo $product['ObiProduct']['name']; ?>" data-title="<?php echo $product['ObiProduct']['name']; ?>"><img src="/files/products/<?php echo $value['src']; ?>" /></a><?php
														$found = true;
														break;
													}
												}
												
												if (!$found) {
													?><img src="/img/no-image.png" title="{{product.ObiProduct.name}}" /><?php
												}
												
											} else {
												?><img src="/img/no-image.png" title="{{product.ObiProduct.name}}" /><?php
											}
											
											?>
										
											
										</div>
										<?php
											if (!empty($product['ObiProductMedia'])) {
												
												foreach ($product['ObiProductMedia'] as $photo) {
													if ($photo['media_type'] == 'image') {
														?>
														<div class="galleryElement" style="background-image: url('/files/products/<?php echo $photo['src']; ?>')"></div>
														<?php
													}
												}
											} else { ?>
											<p>Ten produkt nie posiada galerii.</p> <?php
											}
										?>
									</div>
									<div class="downloadPdf"><a href="/products/generate_pdf/<?php echo $product['ObiProduct']['id']; ?>" target="_blank"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Pobierz ten produkt w PDF</a></div>
								
								</div>
								<div class="col-md-6 description">
									<h1><?php echo $product['ObiProduct']['name']; ?></h1>
									<div class="productCategory">
										[ Kategoria główna <?php if (isset($product['ObiProductCategory'][0])): echo " / ".$product['ObiProductCategory'][0]['ObiCategory']['name']; endif; ?> ]
									</div>
									<div class="text">
										<?php echo $product['ObiProduct']['description']; ?>
									</div>
								</div>
								<div class="col-md-4">
									<div class="tabs">
										<div class="tab col-md-4 data-basic selected tab-1" ng-click="selectTab(1)">Dane <br/> podstawowe</div>
										<div class="tab col-md-4 data-logistic tab-2" ng-click="selectTab(2)">Dane <br/> logistyczne</div>
										<!---<div class="tab col-md-4 data-detailed tab-3" ng-click="selectTab(3)">Dane <br/> szczegółowe</div>--->
									</div>
									<div class="details">
										<div class="detail-tab detail-tab-1">
											<table>
												<?php if ($product['ObiProductDataBasics']['product_ean']) : ?>
												<tr>
													<td>EAN</td>
													<td><?php echo $product['ObiProductDataBasics']['product_ean']; ?></td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataBasics']['product_producer']) : ?>
												<tr>
													<td>Producent</td>
													<td><?php echo $product['ObiProductDataBasics']['product_producer']; ?></td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataBasics']['product_mark']) : ?>
												<tr>
													<td>Marka</td>
													<td><?php echo $product['ObiProductDataBasics']['product_mark']; ?></td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataBasics']['obi_product_inner_id']) : ?>
												<tr>
													<td>Numer OBI</td>
													<td><?php echo $product['ObiProductDataBasics']['obi_product_inner_id']; ?></td>
												</tr>
												<?php endif; ?>
												
												<?php if ($product['ObiProductDataBasics']['opis_gr_towarowej']) : ?>
												<tr>
													<td>Opis gr. towarowej</td>
													<td><?php echo $product['ObiProductDataBasics']['opis_gr_towarowej']; ?></td>
												</tr>
												<?php endif; ?>
												
												<?php if ($product['ObiProductDataBasics']['data_rejestracji']) : ?>
												<tr>
													<td>Data rejestracji</td>
													<td><?php echo $product['ObiProductDataBasics']['data_rejestracji']; ?></td>
												</tr>
												<?php endif; ?>
												
												<?php if ($product['ObiProductDataBasics']['nr_art_dostawcy']) : ?>
												<tr>
													<td>Nr art dostawcy</td>
													<td><?php echo $product['ObiProductDataBasics']['nr_art_dostawcy']; ?></td>
												</tr>
												<?php endif; ?>
												
												<?php if ($product['ObiProductDataBasics']['nazwa_dostawcy']) : ?>
												<tr>
													<td>Nazwa dostawcy</td>
													<td><?php echo $product['ObiProductDataBasics']['nazwa_dostawcy']; ?></td>
												</tr>
												<?php endif; ?>
												
												<?php if ($product['ObiProductDataBasics']['kategoria_wyszukiwania']) : ?>
												<tr>
													<td>Kategoria wyszukiwania</td>
													<td><?php echo $product['ObiProductDataBasics']['kategoria_wyszukiwania']; ?></td>
												</tr>
												<?php endif; ?>
												
												<tr>
													<td>Data utworzenia</td>
													<td>
														<?php 
															if (isset($product['ObiProduct']['created'])) {
																echo $product['ObiProduct']['created']; 
															} else {
																echo "<i>Utworzono z importu</i>";
															}
															
														?>
													</td>
												</tr>
												
												<tr>
													<td>Data modyfikacji</td>
													<td>
														<?php 
															if (isset($product['ObiProduct']['modified'])) {
																echo $product['ObiProduct']['modified']; 
															} else {
																echo "<i>Utworzono z importu</i>";
															}
															
														?>
													</td>
												</tr>
												
											</table>
										</div>
										<div class="detail-tab detail-tab-2" style="display: none">
											<table>
												<?php if ($product['ObiProductDataLogistics']['product_width']) : ?>
												<tr>
													<td>Szerokość produktu w mm:</td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_width']; ?>
													</td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataLogistics']['product_height']) : ?>
												<tr>
													<td>Wysokość produktu w mm:</td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_height']; ?>
													</td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataLogistics']['product_depth']) : ?>
												<tr>
													<td>Głębokość produktu w mm:</td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_depth']; ?>
													</td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataLogistics']['product_weight']) : ?>
												<tr>
													<td>Waga produktu w kg:</td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_weight']; ?>
													</td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataLogistics']['product_package_width']) : ?>
												<tr>
													<td>Szerokość produktu wraz z opakowaniem w mm: </td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_package_width']; ?>
													</td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataLogistics']['product_package_height']) : ?>
												<tr>
													<td>Wysokość produktu wraz z opakowaniem w mm: </td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_package_height']; ?>
													</td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataLogistics']['product_package_depth']) : ?>
												<tr>
													<td>Głębokość produktu wraz z opakowaniem w mm:</td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_package_depth']; ?>
													</td>
												</tr>
												<?php endif; ?>
												<?php if ($product['ObiProductDataLogistics']['product_package_weight']) : ?>
												<tr>
													<td>Waga produktu wraz z opakowaniem w kg:</td>
													<td>
														<?php echo $product['ObiProductDataLogistics']['product_package_weight']; ?>
													</td>
												</tr>
												<?php endif; ?>
											</table>
										</div>
										<div class="detail-tab detail-tab-3" style="display: none">
											<?php 
												if (!empty($product['ObiProductData'])) {
													echo "<table>";
													foreach ($product['ObiProductData'] as $productData) {
														echo "
															<tr>
																<td style='text-transform: capitalize'>".$productData[0]['ObiCategoryData']['name']."</td>
																<td>".$productData['value']."</td>
															</tr>
														";
													}
													echo "</table>";
												} else {
													echo "<p>Nie zdefiniowano danych szczegółowych dla tego produktu.</p>";
												}
											?>
											
										</div>
									</div>
									
								</div>
							</div>
							
							<div class="row files">
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
							
							<div class="row">
								<div class="col-md-12 folderDiv packshot">
									<h3>Katalog: PACKSHOT</h3>
									
									<?php
										if (!empty($product['ObiProductMedia'])) {
											
											foreach ($product['ObiProductMedia'] as $key => $photo) {
												if ($photo['media_type'] == 'image') {
													?>
													<a href="/files/products/<?php echo $photo['src']; ?>" data-lightbox="Podgląd" data-title="Podgląd" style="position: absolute; top: 0; left:0; right: 0; bottom: 0; z-index: 99">
														<div class="minifiedBlock" style="background-image: url('/files/products/<?php echo $photo['src']; ?>');" style="z-index: 9999">
															<div class="contextMenu" style="z-index: 9999;">	
																<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																<a href="/files/products/<?php echo $photo['src']; ?>" data-lightbox="Podgląd" data-title="Podgląd"><i class="fa fa-search" aria-hidden="true"></i> ZOBACZ</a>
															</div>
														</div>
													</a>
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
													<a href="/files/products/<?php echo $photo['src']; ?>" data-lightbox="Podgląd" data-title="Podgląd">
														<div class="minifiedBlock" style="background-image: url('/files/products/<?php echo $photo['src']; ?>');">
															<div class="contextMenu">	
																<a href="/files/products/<?php echo $photo['src']; ?>" download target="_blank"><i class="fa fa-download" aria-hidden="true"></i> POBIERZ</a>
																<a href="/files/products/<?php echo $photo['src']; ?>" data-lightbox="Podgląd" data-title="Podgląd"><i class="fa fa-search" aria-hidden="true"></i> ZOBACZ</a>
															</div>
														</div>
													</a>
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
							
							<div class="row" style="margin-top: 40px;">
								<div class="col-md-12">
									<p>
										
									</p>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
