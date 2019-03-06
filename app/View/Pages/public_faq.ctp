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
	<link href="/js/lightbox/css/lightbox.css" rel="stylesheet">
	<script type="text/javascript" src="/js/lightbox/js/lightbox.js" ></script>
	<script type="text/javascript">
	  $( function() {
		$( document ).tooltip({
          content: function () {
              return $(this).prop('title');
          }
		});
	  } );
	</script>
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
		h1 {
			padding: 0;
			margin: 48px 0;
		}
		
		h4 {
			text-transform: inherit;
		}
	
		.ui-tooltip {
			padding: 8px;
			position: absolute;
			z-index: 9999;
			max-width: 300px;
			background: #fff;
		}
		body .ui-tooltip {
			border-width: 2px;
			border: 1px solid #ff7313;
		}
	</style>
	<div class="main-container">
		<div>
			<?php 
				echo $this->Html->link($this->Html->image('layout/obi_logo.png', array('class' => 'main_logo')), array('controller' => 'users', 'action' => 'public_login'), array('escape' => false)); 
			?>
			<span class="header_slogan">Platforma wyszukiwania produktów (v 1.1.2)</span>
		</div>
		<div class="top-main-panel clearfix">
			<div class="pull-left">
				<ul>
					<li><?php echo $this->Authorize->link(__('<i class="fa fa-home" aria-hidden="true"></i> Start'), array('controller' => 'pages', 'action' => 'dashboard'), array('escape' => false)); ?></li>
					<li><?php echo $this->Authorize->link(__('Wyszukiwanie produktów'), array('controller' => 'products', 'action' => 'index')); ?></li>
					<li><?php echo $this->Authorize->link(__('Edycja konta'), array('controller' => 'users', 'action' => 'edit', AuthComponent::user('id'))); ?></li>
					<li><?php echo $this->Html->link(__('FAQ'), array('controller' => 'pages', 'action' => 'public_faq')); ?></li>
					<li><?php echo $this->Authorize->link(__('Kontakt'), array('controller' => 'pages', 'action' => 'contact')); ?></li>
					<li><?php echo $this->Html->link(__('obi.pl'), "https://www.obi.pl/", array('target' => '_blank')); ?></li>
				</ul>
			</div>
			<div class="pull-right">
				<?php $roleNames = $this->Display->displayRoles(AuthComponent::user('id')); ?>
				<i class="fa fa-user" aria-hidden="true"></i>
				<strong><?php echo AuthComponent::user('name'); /*echo $this->Authorize->link(AuthComponent::user('email'), array('controller' => 'users', 'action' => 'edit', AuthComponent::user('id')));*/ ?></strong>
				<?php echo "[".$roleNames."]"; ?>
				<?php echo $this->Authorize->link(__('Zmień hasło'), array('controller' => 'profile', 'action' => 'change_password')); ?>
				<?php echo $this->Authorize->link(__('Wyloguj się'), array('controller' => 'users', 'action' => 'public_logout'), array('class' => 'logout')); ?>
			</div>
		</div>
		
		<div class="flash">
			<?php echo $this->Session->flash(); ?>
		</div>
		
		<div class="content" app-view><h1>Najczęściej zadawane pytania / problemy</h1>

	<div class="row">
		<div class="col-xs-12">
			<h4>Większość funkcji platformy nie działa</h4>
			<p>Platforma produktyobi.pl nie jest dostosowana pod przeglądarki internetowe Internet Explorer. Prosmy o skorzystanie z dowolnej innej przeglądarki.</p>
			<br/>
		</div>
		<div class="col-xs-12">
			<h4>Nie mogę się zalogować</h4>
			<p>Sprawdź, czy poprawnie wpisujesz login oraz hasło - wielkość znaków ma znaczenie. Jeśli logujesz się po raz pierwszy do platformy to pamiętaj, że Twój login to: numerdostawcy@obi.pl (np 9812@obi.pl) oraz hasło, które zostało wysłane na maila.</p>
			<br/>
		</div>
		<div class="col-xs-12">
			<h4>Nie działa import danych</h4>
			<p>Sprawdź, czy plik który wysyłasz posiada rozszerzenie <strong>.xlsx</strong>. Porównaj układ kolumn z pliku eksportowanego do tego, który importujesz. Nie można zmieniać kolejności kolumn w pliku excel, gdyż system zaimportuje nieprawidłowo dane.</p>
			<br/>
		</div>
	</div><?php echo $this->fetch('content'); ?>
		</div>
	</div>
</body>
</html>