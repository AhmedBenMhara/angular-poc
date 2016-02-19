(function(){
	
	var app = angular.module('a/c')
	
	app.config(['ChartJsProvider', function (ChartJsProvider) {
	    // Configure all charts
	    ChartJsProvider.setOptions({
	      colours: ['#FF5252', '#FF8A80'],
	      responsive: true,
	      maintainAspectRatio: false
	    });
	    // Configure all line charts
	    ChartJsProvider.setOptions('Line', {
	      datasetFill: false,
	      bezierCurveTension: 0.3
	    });
	  }]);
	
	app.controller("LineController", ['$timeout', function ($timeout) {

		var ctrl = this;
		
		ctrl.labels = ["January", "February", "March", "April", "May", "June", "July"];
		ctrl.series = ['Series A', 'Series B'];
		ctrl.data = [
		               [65, 59, 80, 81, 56, 55, 40],
		               [28, 48, 40, 19, 86, 27, 90]
		               ];
		ctrl.onClick = function (points, evt) {
			console.log(points, evt);
		};

		// Simulate async data update
		$timeout(function () {
			ctrl.data = [
			               [28, 48, 40, 19, 86, 27, 90],
			               [65, 59, 80, 81, 56, 55, 40]
			               ];
		}, 3000);
	}]);
})();