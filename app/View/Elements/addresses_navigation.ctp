<div class="navigation iconav clearfix">
    <?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span> Lista adresów', array('controller' => 'addresses', 'action' => 'index'), array('escape' => false)); ?>
    <?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span> Dodaj adres', array('controller' => 'addresses', 'action' => 'add'), array('escape' => false)); ?>
</div>