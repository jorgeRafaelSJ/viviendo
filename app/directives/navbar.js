angular
	.module('app')
	.directive('navbar', [ '$location', ($location) => {
		return {
			restrict: 'E',
			templateUrl: '../views/_navbar.html',
			link: (scope,element,attrs) => {
				scope.goHome = () => {
					$location.path('/');
				}
			}
		}
	}]);