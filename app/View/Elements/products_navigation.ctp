<div class="navigation clearfix">
	<?php 
	echo $this->Authorize->link('<i class="fa fa-plus"></i><span>'.__('Dodaj produkt').'</span>',
	array('controller' => 'products', 'action' => 'add'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'add')
	)); 

	echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Zarządzanie produktami').'</span>',
	array('controller' => 'products', 'action' => 'manage'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'manage')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Zarządzanie markami').'</span>',
	array('controller' => 'products', 'action' => 'manage_marks'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'manage_marks')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Zarządzanie producentami').'</span>',
	array('controller' => 'products', 'action' => 'manage_producers'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'manage_producers')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-search" aria-hidden="true"></i>'.__('Wyszukiwanie produktów').'</span>',
	array('controller' => 'products', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'index')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>'.__('Import/export produktów').'</span>',
	array('controller' => 'products', 'action' => 'import'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'import')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-pie-chart" aria-hidden="true"></i>'.__('Zestawienie danych logistycznych').'</span>',
	array('controller' => 'products', 'action' => 'logistic_data'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'logistic_data')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-pie-chart" aria-hidden="true"></i>'.__('Zamów do produktów').'</span>',
	array('controller' => 'products', 'action' => 'external'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('products', 'external')
	)); 
	
	
	
	?>
</div>