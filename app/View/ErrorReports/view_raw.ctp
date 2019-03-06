<div class="error-reports view">
    <div class="view-wrapper">
        <?php echo $this->element('errors_navigation'); ?>
        
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="error_simple">
                            <table>
                                <tr class="main">
                                    <td><?php echo __('Log file name:'); ?> <strong><?php echo $fileInfo['name']; ?></strong></td>
                                    <td><?php echo __('Size:'); ?> <strong ng-init="size=<?php echo $fileInfo['size']; ?>">{{size | rdsFileSize}}</strong></td>
                                    <td><?php echo __('Date modified:'); ?> <strong><?php echo $fileInfo['modified']; ?></strong></td>
                                </tr>
                                <tr class="error_content">
                                    <td colspan="3">
                                        <pre><?php echo $fileInfo['content']; ?></pre>
                                    </td>
                                </tr>
                            </table>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
