<div class="users view_profile">
	<div class="view-wrapper">
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h1>Profil użytkownika: <?php echo $this->data['User']['name']; ?></h1>
						<p>Adres email: <?php echo $this->data['User']['email']; ?></p>
						<p>Biografia: <?php echo $this->data['AccountDetails']['biography']; ?></p>
						<p>Podpisuje się imieniem i nazwiskiem: <?php echo $this->data['AccountDetails']['personalities_signature']; ?></p>
						<p>Podpisuje się pseudonimem: <?php echo $this->data['AccountDetails']['pseudonym_signature']; ?></p>
						<?php debug($this->data); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
