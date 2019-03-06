<?php

Router::connect('/', array('controller' => 'pages', 'action' => 'dashboard'));
Router::connect('/cron', array('controller' => 'cron', 'action' => 'public_index'));
Router::connect('/templates/*', array('controller' => 'templates', 'action' => 'get'));

CakePlugin::routes();
require CAKE . 'Config' . DS . 'routes.php';
