(function(){
	var app = angular.module('hxpDirectives',[])

	//Directive that lets you define dynamically classes for ng-options
	app.directive('hxpOptionClass',['$parse', function($parse){
		return {
			restrict: 'A',
			require: 'select',
			link: function(scope, el, attrs) {
				// get the source for the items that populates the select
				var optionsSource = attrs.ngOptions.split(' ').pop();
				// make a function that matches an object against the one written in the HTML attribute
				var getOptionClass = $parse(attrs.hxpOptionClass);
				// do the magic when the select is populated (and every time it changes)
				scope.$watch(optionsSource, function(items){
					angular.forEach(items,function(item){
						// get the classes from the matching function
						var classes = getOptionClass(item);
						// get the option node corresponding to the item thanks to angular hash
						var option = el.find("option[value='"+item.$$hashKey+"']");
						// set the class thanks to the map object
						angular.forEach(classes,function(add,name){
							add ? option.addClass(name) : option.removeClass(name);
						});
					});
				});
			}
		};
	}]);
})();