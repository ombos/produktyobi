<h1>Logi użytkowników</h1>
<div class="users index">
	<div class="view-wrapper">
		<?php echo $this->element('users_navigation'); ?>
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<table >
							<thead>
								<tr>
									<th>Użytkownik</th>
									<th>Akcja</th>
									<th>Czas</th>
								</tr>
							</thead>
							<tbody>
								<?php foreach ($history as $value) { ?>
									<tr>
										<td><?php echo $value['User']['name']; ?> (<?php echo $value['User']['email']; ?>)</td>
										<td><?php echo $value['UserLog']['action_name']; ?></td>
										<td><?php echo $value['UserLog']['created']; ?></td>
									</tr>
								<?php } ?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
