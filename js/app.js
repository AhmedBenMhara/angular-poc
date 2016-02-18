(function(){
	'use strict';
	var app = angular.module("a/c", ["hxpDirectives","chartController"]);

	app.controller("SensorController", ["$http","$interval", function($http,$interval){
		var ctrl = this;

		ctrl.sensors = {};
		ctrl.cur = null;
		
		$http.post("//vps161474.ovh.net/Thingworx/Things/SNCF.Resources/Services/getACSensors?appKey=39641e76-4626-45d5-be32-0ade70d93ebb",{})
		.then(function(res){
			ctrl.sensors = res.data;
			for(var s in ctrl.sensors){
				ctrl.cur = ctrl.sensors[s];
				break;
			}
		});
	}]);

})();