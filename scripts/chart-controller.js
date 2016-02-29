(function(){
	
	var app = angular.module('a/c');
	
	app.config(['ChartJsProvider', function (ChartJsProvider) {
	    // Configure all charts
	    ChartJsProvider.setOptions({
	      //colours: ['#FF5252', '#FF8A80'],
	      responsive: true,
	      maintainAspectRatio: false
	    });
	    ChartJsProvider.setOptions('Scatter', {
		      datasetFill: false,
		      bezierCurveTension: 0.3,
		      scaleType: 'date',
		      useUTC: false,
		      datasetStroke: false
		    });
	  }]);
	
})();