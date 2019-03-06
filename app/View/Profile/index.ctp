<div class="profile index">
	<div class="view-wrapper">
		<?php echo $this->element('profile_navigation'); ?>
		
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div>
							<h3><?php echo __('Account details'); ?></h3>
							<table>
								<tr>
									<td><?php echo __('email'); ?>:</td>
									<td><?php echo $user['email']; ?></td>
								</tr>
								<tr>
									<td><?php echo __('name'); ?>:</td>
									<td><?php echo $user['name']; ?></td>
								</tr>
								<tr>
									<td><?php echo __('role'); ?>:</td>
									<td><?php echo $user['UserRole']['name']; ?></td>
								</tr>
							</table>

							<h3><?php echo __('architect information'); ?></h3>
							<table>
								<tr>
									<td><?php echo __('name'); ?>:</td>
									<td>xxx</td>
								</tr>
								<tr>
									<td><?php echo __('country'); ?>:</td>
									<td>xxx</td>
								</tr>
							</table>

							<?php if ($company): ?>
							<h3><?php echo __('company information'); ?></h3>
							<table>
								<tr>
									<td><?php echo __('name'); ?>:</td>
									<td><?php echo $company['Company']['name']; ?></td>
								</tr>
							</table>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
