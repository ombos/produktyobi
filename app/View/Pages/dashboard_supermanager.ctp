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

<div class="row">
	<div class="link_block col-md-4">
		<i class="fa fa-search" aria-hidden="true"></i>
		<span>Wyszukaj produkty</span>
		<?php echo $this->Authorize->link(__(''), array('controller' => 'products', 'action' => 'index')); ?>
	</div>
	
	<div class="link_block col-md-4">
		<i class="fa  fa-users" aria-hidden="true"></i>
		<span>Zarządzaj użytkownikami</span>
		<?php echo $this->Authorize->link(__(''), array('controller' => 'users', 'action' => 'index')); ?>
	</div>
	
	<div class="link_block col-md-4">
		<i class="fa fa-folder-open" aria-hidden="true"></i>
		<span>Zarządzaj kategoriami</span>
		<?php echo $this->Authorize->link(__(''), array('controller' => 'categories', 'action' => 'index')); ?>
	</div>
	
	<div class="link_block col-md-4">
		<i class="fa fa-shopping-cart" aria-hidden="true"></i>
		<span>Zarządzaj produktami</span>
		<?php echo $this->Authorize->link(__(''), array('controller' => 'products', 'action' => 'manage')); ?>
	</div>
	
	<div class="link_block col-md-4">
		<i class="fa fa-user" aria-hidden="true"></i>
		<span>Edytuj konto</span>
		<?php echo $this->Authorize->link('', array('controller' => 'users', 'action' => 'edit', AuthComponent::user('id')));?>
	</div>
	
	<div class="link_block col-md-4">
		<i class="fa fa-power-off" aria-hidden="true"></i>
		<span>Wyloguj się</span>
		<?php echo $this->Authorize->link('', array('controller' => 'users', 'action' => 'public_logout')); ?>
	</div>
</div>