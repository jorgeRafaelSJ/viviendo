'use strict';

angular.module('app', ['ui.router'])
	
	.config([    
		'$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    '$sceDelegateProvider',
    	
    function(
    	$stateProvider,
    	$urlRouterProvider,
    	$locationProvider,
    	$httpProvider,
        $sceDelegateProvider){

    	$stateProvider
    	  .state('home', {
    	    url: "/",
    	    templateUrl: '../views/home.html',
    	    controller: 'Main',
    	    controllerAs: 'vm'
    	  })
          .state('project', {
            url: "/:project",
            templateUrl: '../views/project.html',
            controller: 'Main',
            controllerAs: 'vm'
          });
         
    	$urlRouterProvider.otherwise('/');

    	$locationProvider.html5Mode({
    	  enabled: true,
    	  requireBase: false
    	});

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://www.youtube.com/**',
            'https://www.youtube.com/**'
        ]);
    }])