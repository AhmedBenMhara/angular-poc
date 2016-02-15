(function(){
	var app = angular.module("btc", []);
	
	app.controller("SensorController", ["$http", function($http){
		var ctrl = this;
		
		ctrl.sensors = {};
		
		$http.post("//vps161474.ovh.net/Thingworx/Things/SNCF.Resources/Services/getACSensors?appKey=39641e76-4626-45d5-be32-0ade70d93ebb",{})
		.then(function(res){
			ctrl.sensors = res.data;
		});
	}]);
	
})();