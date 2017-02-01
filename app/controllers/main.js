"use strict";

angular
	.module('app')
	.controller('Main', [ '$rootScope', function($rootScope) {
		
		let vm = this;

		vm.sayHello = () => {
			console.log('ES6 WORKING');
		};

		vm.sayHello();
	}]);