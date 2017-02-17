"use strict";

angular
	.module('app')
	.controller('Main', [ '$rootScope', '$location', function($rootScope, $location) {
		
		const vm = this;

		vm.goToVid = (video) => {
			console.log(video);
			$location.path(`/${video}`);
		};
	}]);