<div class="error_reports index">
	<div class="view-wrapper">
		<?php echo $this->element('errors_navigation'); ?>
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
    					<table>
    						<thead>
    							<tr>
    								<th><?php echo __('report'); ?></th>
    								<th></th>
    							</tr>
    						</thead>
    						<tr>
    							<td><?php echo __('Mobile application errors'); ?></td>
    							<td>
    								<?php echo $this->Html->link(__('View'), array('controller' => 'error_reports', 'action' => 'errors_mobile'), array('class' => 'btn btn-sm btn-primary', 'escape' => false, 'escapeUrl' => false)); ?>
    							</td>
    						</tr>
    						<tr>
								<td><?php echo __('System errors'); ?></td>
								<td>
									<?php echo $this->Html->link(__('View'), array('controller' => 'error_reports', 'action' => 'errors_system'), array('class' => 'btn btn-sm btn-primary', 'escape' => false, 'escapeUrl' => false)); ?>
								</td>
    						</tr>
    						<tr>
								<td><?php echo __('File import errors'); ?></td>
								<td>
									<?php echo $this->Html->link(__('View'), array('controller' => 'error_reports', 'action' => 'errors_import'), array('class' => 'btn btn-sm btn-primary', 'escape' => false, 'escapeUrl' => false)); ?>
								</td>
    						</tr>
    					</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
