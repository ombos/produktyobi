<div class="ticket-messages" ng-init="wrapperParams = {}">
    <h4><?php echo __('Messages'); ?></h4>
    <div
        rds-wrapper
        rds-wrapper-loading="wrapperParams.loading"
        rds-wrapper-message="wrapperParams.message"
        rds-wrapper-message-type="wrapperParams.messageType"
    >
        <div
            class="ticket-messages-list"
            rds-list
            rds-list-url="/support_ticket_messages/filter_index/<?php echo $supportTicketId; ?>"
            rds-list-items="messages"
            rds-list-submit="wrapperParams.message = null; wrapperParams.loading = true"
            rds-list-success="wrapperParams.loading = false"
            rds-list-fault="wrapperParams.message = '<?php echo Consts::$faultMessage; ?>'; wrapperParams.loading = false"
            rds-list-filter-call="reload"
        >
            <div class="ticket-message" ng-repeat="message in messages">
                <div class="ticket-message-author clearfix"><span class="author pull-left">{{message.User.name}}</span> <span class="date pull-right">{{message.SupportTicketMessage.created}}</span></div>
                <div class="ticket-message-content">
                    <div class="row">
                        <div class="col-xs-7">
                            {{message.SupportTicketMessage.content}}
                        </div>
                        <div class="col-xs-5">
                            <div class="file-attachment pull-left" ng-repeat="fileAttachment in message.SupportTicketFileAttachment">
                                <div ng-if="fileAttachment.type == 'image'">
                                    <div app-image="fileAttachment.url" app-image-thumb="fileAttachment.thumb_url"></div>
                                </div>
                                <div ng-if="fileAttachment.type != 'image'">
                                    <div app-file="fileAttachment"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div rds-wrapper rds-wrapper-loading="loadingAddMessage" rds-wrapper-message="messageAddMessage" rds-wrapper-message-type="'danger'">
        <?php echo $this->Form->create('SupportTicketMessage', array(
            'action' => 'add',
            'ajax' => true,
            'validationUrl' => 'support_tickets/validate_add_message',
            'submit' => 'messageAddMessage = null; loadingAddMessage = true',
            'success' => 'loadingAddMessage = false; messageContent = \'\'; reload(); reset();',
            'error' => 'messageAddMessage = response.errors; loadingAddMessage = false',
            'fault' => 'messageAddMessage = "'.Consts::$faultMessage.'"; loadingAddMessage = false'
        )); ?>
        <?php echo $this->Form->input('support_ticket_id', array('type' => 'hidden', 'value' => $supportTicketId)); ?>
        <div class="row">
            <div class="col-xs-7">
                <?php echo $this->Form->input('content', array('label' => __('message'), 'type' => 'textarea', 'ng-model' => 'messageContent')); ?>
            </div>
            <div class="col-xs-5">
                <?php echo $this->Form->input('files', array(
                    'label' => __('files'),
                    'type' => 'x-file', 
                    'buttonLabel' => __('Drag & Drop (max 3 files)'),
                    'maxFiles' => 3,
                    'div' => array('rds-input-x-file-reset' => 'reset'),
                )); ?>
            </div>
        </div>
        <?php echo $this->Form->submit(__('Add message'), array('class' => 'btn btn-success')); ?>
        <?php echo $this->Form->end(); ?>
    </div>
</div>