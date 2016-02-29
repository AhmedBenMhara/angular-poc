(function(){
	'use strict';
	var app = angular.module("a/c", ["hxpDirectives","chart.js", "twServices"]);

	app.config(['thingworxProvider', function(tw){
		//Can set one parameter with (name, param)
		tw.set('host','vps161474.ovh.net');
		//or multiples with ({params}) or (null, {params})
		tw.set({
			thing: 'SNCF.API',
			appKey: '39641e76-4626-45d5-be32-0ade70d93ebb'
		});
	}]);
	
	app.controller("SensorController", ["twReST","$interval", function(tw,$interval){
		var ctrl = this;

		ctrl.sensors = {};
		ctrl.cur = null;
		
		tw.post("getACSensors").then(function(res){
			ctrl.sensors = res.data;
			for(var s in ctrl.sensors){
				ctrl.cur = ctrl.sensors[s];
				break;
			}
			angular.forEach(ctrl.sensors,function(sensor, key){
				sensor.chart = {
						data: []
				};
				tw.post("getAllDataForSensor",{name: key}).then(function(res){
					angular.forEach(res.data.rows.slice(0,-2), function(value, ind){
						if(value.timestamp > 0 && value.temperature !== undefined)
							sensor.chart.data.push({
								x: value.timestamp,
								y: value.temperature
							});
					});
				});
			});
		});
		
	}]);
	
})();