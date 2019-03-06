<div class="navigation clearfix">
	<?php 
	echo $this->Authorize->link('<i class="fa fa-line-chart" aria-hidden="true"></i><span>'.__('Raporty').'</span>',
	array('controller' => 'raports', 'action' => 'index'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('raports', 'index')
	)); 
	
	echo $this->Authorize->link('<i class="fa fa-chain-broken" aria-hidden="true"></i><span>'.__('Produkty nieprzypisane').'</span>',
	array('controller' => 'raports', 'action' => 'unsigned'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('raports', 'unsigned')
	)); 

	echo $this->Authorize->link('<i class="fa fa-pie-chart" aria-hidden="true"></i><span>'.__('Zestawienie danych logistycznych').'</span>',
	array('controller' => 'raports', 'action' => 'logistic'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('raports', 'logistic')
	));
	
	echo $this->Authorize->link('<i class="fa fa-pie-chart" aria-hidden="true"></i><span>'.__('Zestawienie danych dostawców').'</span>',
	array('controller' => 'raports', 'action' => 'supplier'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('raports', 'supplier')
	));

	echo $this->Authorize->link('<i class="fa fa-bell-o" aria-hidden="true"></i><span>'.__('Aktywność użytkowników').'</span>',
	array('controller' => 'raports', 'action' => 'activity'),
	array(
		'escape' => false,
		'class' => $this->Display->currentAction('raports', 'activity')
	)); 	
	
	?>
</div>