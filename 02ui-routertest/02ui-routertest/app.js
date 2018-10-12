'use strict';
// Define `TrialApp` module
var app = angular.module('myapp', ['ui.router']);
// Define routers
app.config(function($stateProvider) {
	$stateProvider
	    .state('home', {
		    url: '/home',
		    templateUrl: 'index.html',
		    controller: 'MainController'
	    })
	    .state('1', { 
	    	url: '/Page1',
	    	templateUrl:'views/1/Page1.html',
	    	controller: function($scope, $state) {
	    		$scope.change = function() {
	    			$state.go('1.1');
	    		}
	    	}
	    })
	    .state('1.1', {
	    	url: '/Page1.1',
	    	templateUrl: 'views/1/childviews/Page1.1.html',
	    	controller: function($scope, $state) {
	    		$scope.change = function() {
	    			$state.go('1.1.1');
	    		}
	    	}
	    })
	    .state('1.1.1', {
	    	url: '/Page1.1.1',
	    	templateUrl: 'views/1/childviews/Page1.1.1.html',
	    })
	    .state('2', {
	    	url: '/Page2',
	    	templateUrl: 'views/2/Page2.html',
	    	controller: function($scope, $state) {
	    		$scope.change = function() {
	    			$state.go();
	    		}
	    	}
	    })
});
app.controller('MainController', function() {
     alert("Welcome to nested view demo!");
});