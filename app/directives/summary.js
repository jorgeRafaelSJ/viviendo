angular
	.module('app')
	.directive('summary', [() => {
		return {
			restrict: 'E',
			templateUrl: '../views/_summary.html'
		}
	}]);