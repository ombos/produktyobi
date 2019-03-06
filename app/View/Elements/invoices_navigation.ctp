<div class="navigation iconav clearfix">
    <?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span> Dodaj fakturę od ContentPro', array('controller' => 'invoices', 'action' => 'add'), array('escape' => false)); ?>
    <?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span> Dodaj rachunek dla ContentPro', array('controller' => 'invoices', 'action' => 'add_bill'), array('escape' => false)); ?>
    <?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span> Lista faktur', array('controller' => 'invoices', 'action' => 'index'), array('escape' => false)); ?>
    <?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span> Lista rachunków', array('controller' => 'invoices', 'action' => 'index_bills'), array('escape' => false)); ?>
</div>