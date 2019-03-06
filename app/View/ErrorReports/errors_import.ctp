<div class="error-reports view">
    <div class="view-wrapper">
        <?php echo $this->element('errors_navigation'); ?>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1><?php echo __('Import errors log files list'); ?></h1>
                        
                        <div
                            rds-wrapper
                            rds-wrapper-loading="wrapperParams.loading"
                            rds-wrapper-message="wrapperParams.message"
                            rds-wrapper-message-type="wrapperParams.messageType"
                        >
                            <div
                                class="advanced-list"
                                rds-list
                                rds-list-url="/error_reports/filter_errors_import"
                                rds-list-items="files"
                                rds-list-filter-call="reload"
                                rds-list-submit="wrapperParams.message = null; wrapperParams.loading = true"
                                rds-list-success="wrapperParams.loading = false"
                                rds-list-fault="wrapperParams.message = errorMessage; wrapperParams.messageType = 'danger'; wrapperParams.loading = false"
                            >
                                <table ng-show="files">
                                    <thead>
                                        <tr>
                                            <th><?php echo __('Name'); ?></th>
                                            <th><?php echo __('Size'); ?></th>
                                            <th><?php echo __('Modified'); ?></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody ng-repeat="file in files">
                                        <tr>
                                            <td>{{file.name}}</td>
                                            <td>{{file.size | rdsFileSize}}</td>
                                            <td>{{file.modified}}</td>
                                            <td>
                                                <?php echo $this->Html->link('<i class="fa fa-eye"></i>', '/error_reports/view_errors_import/{{file.name}}', array('class' => 'btn btn-success', 'escape' => false)); ?>
                                                <?php //echo $this->Html->link('<i class="fa fa-wrench"></i>', '/error_reports/view_raw/{{file.name}}', array('class' => 'btn btn-warning', 'escape' => false)); ?>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
