<!DOCTYPE html>
<html ng-app="app">
	<head>
		<?php echo $this -> Html -> charset(); ?>
		<title>OBI - platforma wewnętrzna</title>
		<?php echo $this->Html->meta('icon', 'favicon.ico'); ?>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&amp;subset=latin-ext" rel="stylesheet">
		<?php
		echo $this -> Html -> css(
			array(
				'/plugin/rds/css/font-awesome.min', 
				'front', 
				'/plugin/rds/css/scrolling-nav'
			));
		echo $this -> Html -> script(
			array(
				'/plugin/rds/js/angular.min', 
				'/plugin/rds/js/angular-sanitize.min', 
				'/plugin/rds/js/jquery-2.1.1.min', 
				'/plugin/rds/js/jquery-ui.min', 
				'/plugin/rds/js/bootstrap.min', 
				'/plugin/rds/js/jquery.easing.min', 
				'/plugin/rds/js/scrolling-nav', 
				'/plugin/rds/js/main', 
				'lib/angular-animate.min', 
				'app/app', 
				'app/services', 
				'app/directives',
				'app/angularSlideables'
			));
		echo $this -> fetch('meta');
		echo $this -> fetch('css');
		echo $this -> fetch('script');
		?>
		<script>
			var GLOBAL = {
				webroot: '<?php echo $this -> webroot; ?>'
			};
		</script>		
	</head>
	<body id="page-top" class="<?php echo $this->params['action']; ?> public-layout" id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
		<?php echo $this->element('header_public'); ?>
		
		<div class="container-fluid no-padding">
			<div class="row content no-margin">
				<div class="col-xs-12 no-padding" app-view>
					<?php echo $this -> fetch('content'); ?>
				</div>
			</div>
			
			<?php echo $this->element('footer_public'); ?>
		</div>
		
	</body>
</html>
