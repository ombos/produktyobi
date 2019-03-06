angular.module('appServices', []).
provider('Global', function() {
	
	this.$get = function(RdsGlobal) {
		var instance = RdsGlobal;
		instance.webroot = GLOBAL.webroot;
		
		return instance;
	};
	
}).
factory('Location', function() {
	
	return {
		create: function() {
			return {
				Location: {}
			};
		}
	};
	
});
