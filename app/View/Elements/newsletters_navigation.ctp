<div class="navigation iconav clearfix">
    <?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span> Lista', array('controller' => 'newsletters', 'action' => 'index'), array('escape' => false)); ?>
    <?php echo $this->Authorize->link('<i class="fa fa-envelope"></i><span> Wyślij', array('controller' => 'newsletters', 'action' => 'send'), array('escape' => false)); ?>
    <?php echo $this->Authorize->link('<i class="fa fa-bars"></i><span> Lista szablonów', array('controller' => 'newsletter_templates', 'action' => 'index'), array('escape' => false)); ?>
    <?php //echo $this->Authorize->link('<i class="fa fa-plus"></i><span> Dodaj szablon', array('controller' => 'newsletter_templates', 'action' => 'add'), array('escape' => false)); ?>
    <?php echo $this->Authorize->link('<i class="fa fa-plus"></i><span> Nowy newsletter', array('controller' => 'newsletters', 'action' => 'add'), array('escape' => false)); ?>
</div>