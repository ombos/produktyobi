<!DOCTYPE html>
<html ng-app="app">
<head>
	<?php echo $this->Html->charset(); ?>
	<title>OBI - platforma wewnętrzna</title>
	<?php echo $this->Html->meta('icon', 'favicon.ico'); ?>
	<?php
	echo $this->Html->css(array(
		'/plugin/rds/css/font-awesome.min',
		'main',
		'front',
		'/js/lib/lightbox2-master/src/css/lightbox.css'
	));
	echo $this->Html->script(array(
		'/plugin/rds/js/angular.min',
		'/plugin/rds/js/angular-sanitize.min',
		'/plugin/rds/js/main',
		'/plugin/rds/js/tinymce/js/tinymce/tinymce.min.js',
		'lib/angular-animate.min',
		'lib/jquery-2.1.3.min',
		'lib/jquery-ui.min',
		'/plugin/rds/js/customize',
		'app/app',
		'app/services',
		'app/directives',
		'app/angularSlideables',
		'/plugin/rds/js/jquery.iframe-post-form',
		'lib/lightbox2-master/src/js/lightbox.js'
	));
	echo $this->fetch('meta');
	echo $this->fetch('css');
	echo $this->fetch('script');
	?>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&amp;subset=latin-ext" rel="stylesheet">
	<script type="text/javascript">
		tinymce.init({ 
			selector:'textarea.tinymce',
			height: '500px',
			menubar: true,
			language: 'pl',
			paste_data_images: false,
			imageupload_url: '/s/app/webroot/files/tinymce',
			plugins: "image, searchreplace, code, link, wordcount, advlist, autolink, lists, charmap, print, preview, anchor, visualblocks, fullscreen, insertdatetime, media, table, contextmenu, powerpaste",
			toolbar: 'insertfile undo redo image searchreplace | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | print preview media fullpage | forecolor backcolor emoticons | code',
			powerpaste_allow_local_images: true,
			powerpaste_word_import: 'prompt',
			powerpaste_html_import: 'prompt',
			//wordcount_countregex: /[\w\u2019\x27\-\u00C0-\u1FFF]+/g,
			setup: function(editor) {
				editor.on('change', function() {
					tinymce.triggerSave();
				});
				
				if ($('#'+editor.id).attr('readonly')) {
					editor.settings.readonly = true;
				}
			},
		});
		
		var GLOBAL = {
			webroot: '<?php echo $this->webroot; ?>'
		};
	</script>
</head>
<body class="layout-default">

	<style>
	
		div.public_register div.checkbox label, div.public_register label {
			color: #000 !important;
		}
		
		div.public_register h1 {
			border: 0 !important;
		}
	
		.public_register {
			width: 100% !important;
			padding: 0 !important;
			height: auto !important;
			margin: 0 !important;
			background: none !important;
		}
		
		.public_register .slogan {
			background: #ddd;
			color: #333;
			padding: 15px;
			font-size: 16px;
			font-weight: bold;
			margin-bottom: 40px;
		}
		
		div.public_register input[type="text"], div.public_register input[type="password"] {
			box-sizing: content-box;
			border-radius: 4px;
			border-color: #aaa;
			padding: 5px 20px;
			display: block;
			width: calc(100% - 42px);
			box-shadow: inset 0px 2px 7px #ccc;
			-moz-box-shadow: inset 0px 2px 7px #ccc;
			-webkit-box-shadow: inset 0px 2px 7px #ccc;
		}
		
		div.public_register .checkbox {
			left: 0;
			top: 0;
			margin: 0;
		}
		
	</style>

	<div class="main-container">
		<div>
			<?php 
				echo $this->Html->link($this->Html->image('layout/obi_logo.png', array('class' => 'main_logo')), array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); 
			?>
			<span class="header_slogan">Zarejestruj swoje konto.</span>
		</div>
		<div class="top-main-panel clearfix">
			<div class="pull-left"></div>
			<div class="pull-right"></div>
		</div>
		
		<div class="flash">
			<?php echo $this->Session->flash(); ?>
		</div>
		
		<div class="content" app-view>
			<div class="users public_register" ng-init="message = '<?php echo isset($message) ? $message : null; ?>'">
				<p>Masz już konto? <?php echo $this->Html->link(__('Zaloguj się'), array('controller' => 'users', 'action' => 'public_login')); ?></p>
				
				<div class="slogan">Uzupełnij poniższy formularz rejestracyjny, aby założyć konto w naszym systemie. Administrator aktywuje Twoje konto po rejestracji.</div>
				
				<div app-public-register>	
					<div rds-wrapper rds-wrapper-loading="loading" rds-wrapper-message="message" rds-wrapper-message-type="'danger'">
						<?php echo $this->Form->create('User', array(
							'ajax' => true,
							'validationUrl' => 'users/validate_user_register',
							'submit' => 'message = null; loading = true',
							'success' => 'Util.redirect(response.data.redirect)',
							'error' => 'loading = false',
							'fault' => 'message = "'.Consts::$faultMessage.'"; loading = false'
						)); ?>
						
						<div class="row">
							<div class="col-xs-6"><?php echo $this->Form->input('User.company_name', array('label' => false, 'placeholder' => __('Nazwa firmy'))); ?></div>
							<div class="col-xs-6"><?php echo $this->Form->input('User.address_street', array('label' => false, 'placeholder' => __('Ulica'))); ?></div>
							<div class="col-xs-6"><?php echo $this->Form->input('User.address_building', array('label' => false, 'placeholder' => __('Numer budynku'))); ?></div>
							<div class="col-xs-6"><?php echo $this->Form->input('User.address_flat', array('label' => false, 'placeholder' => __('Numer lokalu / mieszkania'))); ?></div>
							<div class="col-xs-6"><?php echo $this->Form->input('User.address_city', array('label' => false, 'placeholder' => __('Miejscowość'))); ?></div>
							<div class="col-xs-6"><?php echo $this->Form->input('User.address_nip', array('label' => false, 'placeholder' => __('Numer NIP'))); ?></div>
							
							
							<div class="col-xs-6"><?php echo $this->Form->input('User.email', array('label' => false, 'placeholder' => __('email'))); ?></div>
							<div class="col-xs-6"><?php echo $this->Form->input('User.password', array('label' => false, 'placeholder' => __('hasło'), 'type' => 'password')); ?></div>
							<div class="col-xs-6"><?php echo $this->Form->input('User.password2', array('label' => false, 'placeholder' => __('powtórz hasło'), 'type' => 'password')); ?></div>
							<div class="col-xs-6">
								<?php $rulesLink = $this->Html->link('regulamin', '#', array('target' => '_blank')); ?>
								<?php echo $this->Form->input('User.accepted_rules', array('type' => 'checkbox', 'label' => 'Akceptuję '.$rulesLink)); ?>
							</div>
						</div>
						<?php echo $this->Form->submit(__('Zarejestruj się'), array('class' => 'btn btn-success')); ?>
						<?php echo $this->Form->end(); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
