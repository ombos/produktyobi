<?php
function displayUserArray($user) {
    foreach($user as $k => $v) {
        if (!is_array($v)) {
            echo $k.': '.$v.'<br>';
        }
    }   
}
?>

<div class="error-reports view">
    <div class="view-wrapper">
        <?php echo $this->element('errors_navigation'); ?>
        
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12" ng-init="size=<?php echo $fileInfo['size']; ?>">
                        <h1><?php echo $fileInfo['name']; ?> | {{size | rdsFileSize}} | <?php echo $fileInfo['modified']; ?></h1>
                        
                        <?php foreach($fileInfo['errors'] as $error): ?>
                        <div class="error-simple" app-error>
                            <div class="row user-bar">
                                <div class="col-xs-6">
                                    <?php echo __('User:'); ?> <strong><?php echo $error['user']['name']; ?></strong>
                                    <button ng-click="toggleUserInfo();" class="btn btn-primary">
                                        <i class="fa fa-chevron-down" ng-show="!userInfoOpened"></i>
                                        <i class="fa fa-chevron-up" ng-show="userInfoOpened"></i>
                                    </button>
                                </div>
                                <div class="col-xs-6">
                                    <?php echo __('Date:'); ?> <strong><?php echo $error['date']; ?></strong>
                                </div>
                            </div>
                            <div class="row user-info" ng-show="userInfoOpened">
                                <div class="col-xs-12">
                                    <div class="row">
                                        <div class="col-xs-4">
                                            <h4>User</h4>
                                            <pre><?php displayUserArray($error['user']); ?></pre>
                                        </div>
                                        <div class="col-xs-4">
                                            <h4>Architect</h4>
                                            <pre><?php displayUserArray($error['user']['Architect']); ?></pre>
                                        </div>
                                        <div class="col-xs-4">
                                            <h4>UserRole</h4>
                                            <pre><?php displayUserArray($error['user']['UserRole']); ?></pre>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <h4>User Agent</h4>
                                            <pre><?php echo $error['browser']; ?></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row error-text">
                                <div class="col-xs-12">
                                    <pre><?php echo $error['text']; ?></pre>
                                </div>
                            </div>
                            <div class="row error-trace">
                                <div class="col-xs-12">
                                    <pre><?php echo $error['trace']; ?></pre>
                                </div>
                            </div>
                            <div class="row support-bar">
                                <div class="col-xs-12">
                                    <?php
                                        echo $this->Authorize->link('<i class="fa fa-life-ring"></i> <span>'.__('Support user').'</span>',
                                        array('controller' => 'support_tickets', 'action' => 'add'),
                                        array('escape' => false));
                                    ?>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
