<div class="error-reports view">
    <div class="view-wrapper">
        <?php echo $this->element('errors_navigation'); ?>
        
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12" ng-init="size=<?php echo $fileInfo['size']; ?>">
                        <h1><?php echo $fileInfo['name']; ?> | {{size | rdsFileSize}} | <?php echo $fileInfo['modified']; ?></h1>
                        
                        <div class="error-simple" app-error>
                            <div class="row error-text">
                                <div class="col-xs-12">
                                    <pre><?php echo $fileInfo['errors']; ?></pre>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
