<div class="error-reports view">
	<div class="view-wrapper">
		<?php echo $this->element('errors_navigation'); ?>
		
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h1><?php echo __('System errors'); ?></h1>
						<div class="error_simple">
							<table>
								<tr class="main">
									<td><?php echo __('Error code:'); ?> <strong>#758</strong></td>
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
						
						<div class="error_simple">
							<table>
								<tr class="main">
									<td>Kod błędu: <strong>#644</strong></td>
									<td>Użytkownik: <strong>admin</strong></td>
									<td>Czas: <strong>30-06-2015 16:22:16</strong></td>
								</tr>
								<tr class="error_content">
									<td colspan="3">
										Error: [MissingTableException] Table app_models for model AppModel was not found in datasource default.
Exception Attributes: array (
  'table' => 'app_models',
  'class' => 'AppModel',
  'ds' => 'default',
)
Request URL: /users/public_login
Stack Trace:
#0 C:\xampp\htdocs\lib\Cake\Model\Model.php(3551): Model->setSource('app_models')
#1 C:\xampp\htdocs\lib\Cake\Model\Model.php(1369): Model->getDataSource()
#2 C:\xampp\htdocs\lib\Cake\Model\Datasource\DboSource.php(2491): Model->schema()
#3 C:\xampp\htdocs\lib\Cake\Model\Datasource\DboSource.php(1716): DboSource->fields(Object(AppModel), 'Architect', '')
#4 C:\xampp\htdocs\lib\Cake\Model\Datasource\DboSource.php(1093): DboSource->generateAssociationQuery(Object(MUser), Object(AppModel), 'belongsTo', 'Architect', Array, Array, false)
#5 C:\xampp\htdocs\lib\Cake\Model\Model.php(2947): DboSource->read(Object(MUser), Array)
#6 C:\xampp\htdocs\lib\Cake\Model\Model.php(2919): Model->_readDataSource('first', Array)
#7 C:\xampp\htdocs\lib\Cake\Controller\Component\Auth\BaseAuthenticate.php(112): Model->find('first', Array)
#8 C:\xampp\htdocs\lib\Cake\Controller\Component\Auth\FormAuthenticate.php(79): BaseAuthenticate->_findUser('tr@rds-group.pl', 'hehe')
#9 C:\xampp\htdocs\lib\Cake\Controller\Component\AuthComponent.php(754): FormAuthenticate->authenticate(Object(CakeRequest), Object(CakeResponse))
#10 C:\xampp\htdocs\lib\Cake\Controller\Component\AuthComponent.php(601): AuthComponent->identify(Object(CakeRequest), Object(CakeResponse))
#11 C:\xampp\htdocs\app\Controller\UsersController.php(99): AuthComponent->login()
#12 [internal function]: UsersController->public_login()
#13 C:\xampp\htdocs\lib\Cake\Controller\Controller.php(490): ReflectionMethod->invokeArgs(Object(UsersController), Array)
#14 C:\xampp\htdocs\lib\Cake\Routing\Dispatcher.php(191): Controller->invokeAction(Object(CakeRequest))
#15 C:\xampp\htdocs\lib\Cake\Routing\Dispatcher.php(165): Dispatcher->_invoke(Object(UsersController), Object(CakeRequest))
#16 C:\xampp\htdocs\app\webroot\index.php(116): Dispatcher->dispatch(Object(CakeRequest), Object(CakeResponse))
#17 {main}
									</td>
								</tr>
								<tr class="support">
									<td colspan="3">
									<?php
										echo $this->Authorize->link('<i class="fa fa-life-ring"></i><span>'.__(' support user').'</span>',
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
