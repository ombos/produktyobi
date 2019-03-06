<style>

	.dashboard-info {
		margin-top: 5vh;
	}

	.link_block {
		background: #ff7313;
		padding: 50px;
		font-size: 20px;
		color: #fff;
		height: 30vh;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		border: 3px solid #fff;
		box-shadow: inset 0px 2px 7px #ccc;
		-moz-box-shadow: inset 0px 2px 7px #ccc;
		-webkit-box-shadow: inset 0px 2px 7px #ccc;
		transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		-webkit-transition: all 0.3s ease 0s;
		-ms-transition: all 0.3s ease 0s;
	}
	
	.link_block:hover {
		background: #fff;
		border-color: #ff7313;
		color: #333;
		box-shadow: inset 20px 20px 60px #ccc;
		-moz-box-shadow: inset 20px 20px 60px #ccc;
		-webkit-box-shadow: inset 20px 20px 60px #ccc;
		transition: all 0.3s ease 0s;
	}
	
	.link_block a {
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.link_block i {
		display: block;
		width: 100%;
		text-align: center;
		font-size: 72px;
	}
	
	.link_block span {
		margin-top: 20px;
	}
	
</style>

<div ng-if="true" class="profile change_password">
	<div class="view-wrapper">
		<?php echo $this->element('raports_navigation'); ?>
		<div class="content">
			<div class="container">

				<div class="row">
					<div class="link_block col-md-6">
						<i class="fa fa-chain-broken" aria-hidden="true"></i>
						<span>Produkty nieprzypisane</span>
						<?php echo $this->Authorize->link(__(''), array('controller' => 'raports', 'action' => 'unsigned')); ?>
					</div>
					
					<div class="link_block col-md-6">
						<i class="fa fa-pie-chart" aria-hidden="true"></i>
						<span>Zestawienie danych logistycznych</span>
						<?php echo $this->Authorize->link(__(''), array('controller' => 'raports', 'action' => 'logistic')); ?>
					</div>
					
					<div class="link_block col-md-6">
						<i class="fa fa-pie-chart" aria-hidden="true"></i>
						<span>Zestawienie danych dostawców</span>
						<?php echo $this->Authorize->link(__(''), array('controller' => 'raports', 'action' => 'supplier')); ?>
					</div>
					
					<div class="link_block col-md-6">
						<i class="fa fa-bell-o" aria-hidden="true"></i>
						<span>Aktywność użytkowników</span>
						<?php echo $this->Authorize->link(__(''), array('controller' => 'raports', 'action' => 'activity')); ?>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</div>