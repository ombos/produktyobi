<div class="navigation clearfix">
	<?php echo $this->Authorize->link('<i class="fa fa-home" aria-hidden="true"></i><span>'.__('Factory').'</span>', array('controller' => 'factory', 'action' => 'index'), array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-download" aria-hidden="true"></i>'.__('Importuj artykuły').'</span>', array('controller' => 'factory', 'action' => 'import_articles'), array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-wrench" aria-hidden="true"></i>'.__('Zarządzaj artykułami').'</span>', array('controller' => 'factory', 'action' => 'manage_articles'), array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-plug" aria-hidden="true"></i>'.__('Zarządzaj API').'</span>', array('controller' => 'factory', 'action' => 'manage_api'), array('escape' => false)); ?>
	<?php echo $this->Authorize->link('<i class="fa fa-wrench" aria-hidden="true"></i>'.__('API Klientów').'</span>', array('controller' => 'factory', 'action' => 'user_api'), array('escape' => false)); ?>
</div>