angular.module('app', ['ngAnimate', 'rds', 'appServices', 'appDirectives', 'angularSlideables']).
config(function($locationProvider) {
	$locationProvider.html5Mode(true);
}).
run(function($rootScope, $location, Global, RdsUtil) {
	$rootScope.Util = RdsUtil;
});