<div class="error-reports view">
	<div class="view-wrapper">
		<?php echo $this->element('errors_navigation'); ?>
		
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h1><?php echo __('Mobile application errors'); ?></h1>
						<div class="error_simple">
							<table>
								<tr class="main">
									<td><?php echo __('Error code:'); ?> <strong>#9800</strong></td>
									<td><?php echo __('User:'); ?> <strong>admin</strong></td>
									<td><?php echo __('Date:'); ?> <strong>25-06-2015 15:54:54</strong></td>
								</tr>
								<tr class="error_content">
									<td colspan="3">
										Error: [MissingControllerException] Controller class CssController could not be found.
										Exception Attributes: array (
										  'class' => 'CssController',
										  'plugin' => NULL,
										)
										Request URL: /css/main.css
										Stack Trace:
										#0 C:\xampp\htdocs\app\webroot\index.php(116): Dispatcher->dispatch(Object(CakeRequest), Object(CakeResponse))
										#1 {main}
										2015-06-25 15:54:54 Error: [MissingControllerException] Controller class CssController could not be found.
										Exception Attributes: array (
										  'class' => 'CssController',
										  'plugin' => NULL,
										)
										Request URL: /css/main.css
										Stack Trace:
										#0 C:\xampp\htdocs\app\webroot\index.php(116): Dispatcher->dispatch(Object(CakeRequest), Object(CakeResponse))
										#1 {main}
										2015-06-25 15:54:56 Error: [MissingControllerException] Controller class CssController could not be found.
										Exception Attributes: array (
										  'class' => 'CssController',
										  'plugin' => NULL,
										)
										Request URL: /css/main.css
										Stack Trace:
										#0 C:\xampp\htdocs\app\webroot\index.php(116): Dispatcher->dispatch(Object(CakeRequest), Object(CakeResponse))
										#1 {main}
									</td>
								</tr>
								<tr class="support">
									<td colspan="3">
										<?php
										echo $this->Authorize->link('<i class="fa fa-life-ring"></i> <span>'.__('Support user').'</span>',
											array('controller' => 'support_tickets', 'action' => 'add'),
											array('escape' => false));
										?>
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
