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
	    		$scope.transfer = function() {
	    			var id = document.getElementById("id").value;
	    			console.log(id);
	    			$state.go('params',{ID: id});
	    		}
        
	    	}
		})
		.state('params', {
	    	url: '/params/:ID',
	    	templateUrl: 'views/2/params.html',
	    	controller: function($scope, $state, $stateParams) {
	    		$scope.index = $stateParams.ID;
	    		$scope.data = [{
	    			            id : 1,
	    			            name : "victor",
	    			            imgSrc: "img/Victor.jpg",
	    			            age:24
	    		                },{
	    		                id : 2,
	    			            name : "angela",
	    			            imgSrc: "img/Angela.jpg",
	    			            age:23
	    		                },{
	    		                id : 3,
	    			            name : "Mark",
	    			            imgSrc: "img/Mark.png",
	    			            age:12
	    		                }];
	    		$scope.exit = function() {
	    			$state.go("2");
	    		}
	    	}
	    })

});
app.controller('MainController', function() {
     alert("Welcome to nested view demo!");
});