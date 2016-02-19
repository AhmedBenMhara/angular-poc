(function(){
	'use strict';
	var mod = angular.module('twServices',[]);
	
	mod.provider('thingworx', function ThingworxProvider(){
		var tw = this;
		tw.host = "";
		tw.appKey = "";
		tw.thing = "";
		
		this.set = function(name, params){
			if(!params || !name){
				params = name || params;
				tw.host = params.host || tw.host;
				tw.appKey = params.appKey || tw.appKey;
				tw.thing = params.thing || tw.thing;
				return;
			}
			tw[name] = params;
		};
		
		this.$get = function(){
			return {
				'host': tw.host,
				'appKey': tw.appKey,
				'thing': tw.thing
			};
		};
	});
	
	mod.factory('twReST',['$http', 'thingworx', function($http, tw){
		
		return {
			get: function(thing, protocol, property){
				return $http.get( (protocol || "https")+"://"+tw.host+"/Thingworx/Things/"+thing+"/Properties/"+(property || "")+"?appKey="+tw.appKey)
			},
			
			post: function(twService, params){
				var promise;
				
				promise = $http.post("//"+tw.host+"/Thingworx/Things/"+tw.thing+"/Services/"+twService+"?appKey="+tw.appKey, params || {});
				
				return promise;
			}
		}
		
	}]);
	
})();