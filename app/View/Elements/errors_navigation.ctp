<div class="navigation">
    <?php 
    echo $this->Authorize->link('<i class="fa fa-bars"></i><span>'.__('Error list').'</span>', array('controller' => 'error_reports', 'action' => 'index'), array('escape' => false)); 
    echo $this->Authorize->link('<i class="fa fa-mobile"></i><span>'.__('Mobile application errors').'</span>', array('controller' => 'error_reports', 'action' => 'errors_mobile'), array('escape' => false));
    echo $this->Authorize->link('<i class="fa fa-file-code-o"></i><span>'.__('System errors').'</span>', array('controller' => 'error_reports', 'action' => 'errors_system'), array('escape' => false));
    echo $this->Authorize->link('<i class="fa fa-photo"></i><span>'.__('File import errors').'</span>', array('controller' => 'error_reports', 'action' => 'errors_import'), array('escape' => false));
    echo $this->Authorize->link('<i class="fa fa-book"></i><span>'.__('Log files').'</span>', array('controller' => 'error_reports', 'action' => 'log_files_list'), array('escape' => false));
    ?>
</div>