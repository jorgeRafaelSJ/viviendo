angular
	.module('app')
	.directive('videoBox', [ '$rootScope', ($rootScope) => {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: '/views/_video-box.html',
			link: (scope,element,attrs) => {

			}
		}
	}]);