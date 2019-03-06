<html>
<head>
    <style>
        body {
            font-family: DejaVuSans;
            font-size: 8pt;
        }
        p {
            margin: 0pt;
        }
        h1 {
            font-size: 9pt;
            text-transform:uppercase;
            margin-top: 0.6cm;
            margin-bottom: 0.4cm;
        }
        table.items {
            border: 0.1mm solid #000000;
        }
        td {
            vertical-align: top;
        }
        .items td {
            border-left: 0.1mm solid #000000;
            border-right: 0.1mm solid #000000;
            border-bottom: 0.1mm solid #000000;
        }
        .items2 td.cost {
            border-left: 0.1mm solid #000000;
            border-right: 0.1mm solid #000000;
            border-bottom: 0.1mm solid #000000;
            text-align: right;
        }
        .items2 td.bord {
            border-left: 0.1mm solid #000000;
            border-right: 0.1mm solid #000000;
            border-bottom: 0.1mm solid #000000;
        }
        table thead td {
            background-color: #EEEEEE;
            text-align: center;
            border: 0.1mm solid #000000;
        }
        .items td.blanktotal {
            background-color: #EEEEEE;
            border: 0.1mm solid #000000;
            background-color: #FFFFFF;
            border: 0mm none #000000;
            border-top: 0.1mm solid #000000;
            border-right: 0.1mm solid #000000;
        }
        .items .items2 td.totals {
            text-align: right;
            border: 0.1mm solid #000000;
        }
        .items td.cost {
            text-align: "." right;
        }
        .items td.emptycell {
            border: 0mm;
            border-top: 0mm;
            border-left: 0mm;
            background-color: null;
            text-align: right;
        }
        .items td.topborder {
            border-top: 0.1mm solid #000000;
        }
        .items2 td.cost {
            text-align: "." right;
        }
        .items2 td.emptycell {
            border: 0mm;
            border-top: 0mm;
            border-right: 0mm;
            background-color: null;
            text-align: right;
        }
        .orderNum {
            font-size: 12pt;
            font-weight: bold;
        }
        .graybg {
            background-color: #EEEEEE;
        }
    </style>
</head>
<body>
    
    <!--mpdf
    <htmlpageheader name="myheader">
    <table width="100%">
        <tr>
            <td width="40%" style="color:#0000BB; "><img src="img/layout/obi_logo.png" style="width: 180px; height: 45px"></td>
			<td width="60%" style="font-size: 13pt; font-weight: bold; font-family: DejaVuSans; font-style: italic; text-align: left">.platforma wyszukiwania produktów</td>
        </tr>
    </table>
    </htmlpageheader>

    <htmlpagefooter name="myfooter">
    </htmlpagefooter>
    
    <sethtmlpageheader name="myheader" value="on" show-this-page="1" />
    <sethtmlpagefooter name="myfooter" value="on" />
    mpdf-->
    
    <h1 style="font-size: 12pt"><?php echo $data['product']['ObiProduct']['name']; ?></h1>
    <p>Kategoria: <?php echo $data['product']['ObiProductCategory']['ObiCategory']['name']; ?></p>
    <br />

	<p style="font-size: 10pt">
		<?php 
		
			if (isset($data['product']['ObiProductMedia'])) {
				echo '<img src="files/products/'.$data['product']['ObiProductMedia'][0]['src'].'" style="max-width: 180px; max-height: 180px; float: left; margin-right: 50px">';
			}
		
			echo $data['product']['ObiProduct']['description']; 
		?>
	</p>
	<br />
	
	<h3>DANE PODSTAWOWE</h3>
	
	<table class="items" width="100%" style="font-size: 8pt; font-family: DejaVuSans; border-collapse: collapse;" cellpadding="5">
		<tbody>
			<tr>
				<td width="50%">EAN</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['product_ean']; ?></td>
			</tr>
			<tr class="graybg">
				<td width="50%">Producent</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['product_producer']; ?></td>
			</tr>
			<tr>
				<td width="50%">Marka</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['product_mark']; ?></td>
			</tr>
			<tr class="graybg">
				<td width="50%">Numer OBI</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['obi_product_inner_id']; ?></td>
			</tr>
			<tr>
				<td width="50%">Opis gr. towarowej</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['opis_gr_towarowej']; ?></td>
			</tr>
			<tr class="graybg">
				<td width="50%">Data rejestracji</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['data_rejestracji']; ?></td>
			</tr>
			<tr>
				<td width="50%">Nr art. dostawcy</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['nr_art_dostawcy']; ?></td>
			</tr>
			<tr class="graybg">
				<td width="50%">Nazwa dostawcy</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['nazwa_dostawcy']; ?></td>
			</tr>
			<tr>
				<td width="50%">Kategoria wyszukiwania</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataBasics']['kategoria_wyszukiwania']; ?></td>
			</tr>
		</tbody>
	</table>
	<br />
	
	<h3>WYMIARY PRODUKTU</h3>
	<table class="items" width="100%" style="font-size: 8pt; font-family: DejaVuSans; border-collapse: collapse;" cellpadding="5">
		<tbody>
			<tr>
				<td width="50%">Szerokość produktu w mm</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataLogistics']['product_width']; ?></td>
			</tr>
			<tr class="graybg">
				<td width="50%">Wysokość produktu w mm</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataLogistics']['product_height']; ?></td>
			</tr>
			<tr>
				<td width="50%">Głębokość produktu w mm</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataLogistics']['product_depth']; ?></td>
			</tr>
			<tr class="graybg">
				<td width="50%">Waga produktu w kg</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataLogistics']['product_weight']; ?></td>
			</tr>
			
			<?php if ($data['product']['ObiProductDataLogistics']['product_package_width']): ?>
			
			<tr>
				<td width="50%">Szerokość produktu wraz z opakowaniem w mm</td>
				<td><?php echo $data['product']['ObiProductDataLogistics']['product_package_width']; ?></td>
			</tr>
			
			<?php endif; ?>
			<?php if ($data['product']['ObiProductDataLogistics']['product_package_height']): ?>
			
			<tr class="graybg">
				<td width="50%">Wysokość produktu wraz z opakowaniem w mm</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataLogistics']['product_package_height']; ?></td>
			</tr>
			
			<?php endif; ?>
			<?php if ($data['product']['ObiProductDataLogistics']['product_package_depth']): ?>
			
			<tr>
				<td width="50%">Głębokość produktu wraz z opakowaniem w mm</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataLogistics']['product_package_depth']; ?></td>
			</tr>
			
			<?php endif; ?>
			<?php if ($data['product']['ObiProductDataLogistics']['product_package_weight']): ?>
			
			<tr class="graybg">
				<td width="50%">Waga produktu wraz z opakowaniem w kg</td>
				<td width="50%"><?php echo $data['product']['ObiProductDataLogistics']['product_package_weight']; ?></td>
			
			</tr>
			<?php endif; ?>
		</tbody>
	</table>
	<br />
	<?php if (!empty($data['product']['ObiProductData'])) { ?>
	<h3>DANE SZCZEGÓŁOWE</h3>
	
	<table class="items" width="100%" style="font-size: 8pt; font-family: DejaVuSans; border-collapse: collapse;" cellpadding="5">
		<tbody>
		<?php 
			
			$lp = 0;
			
			foreach($data['product']['ObiProductData'] as $key => $value) { 
			
				if ($lp%2) $class = 'graybg';
				else $class = '';
			
		?>
				<tr class="<?php echo $class; ?>">
					<td width="50%"><?php echo $value[0]['ObiCategoryData']['name']; ?></td>
					<td width="50%"><?php echo $value['value']; ?></td>
				</tr>
		<?php 
				$lp++;
			} 
		?>
		</tbody>
	</table>
	
	
    <?php } ?>
    
    <br><br>
    
</body>
</html>