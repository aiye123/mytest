'use strict'
var app = angular.module('myapp', ['ui.router']);
app.config(function ($stateProvider) {
    $stateProvider
        .state('c1', {
            url: '/c1',
            template: '<h2>进入c1路由</h2>',
            controller: 'c1controller'
        })
        .state('c2', {
            url: '/c2',
            templateUrl: 'c2.html',
            controller: function () {
                this.test = 'world!';
            },
            controllerAs: 'c2ctrl'
            
        })
        .state('c3', {
            url: '/c3',
            templateProvider: function () {
                return '<h4>进入C3状态</h4><br/>'
                    + '<p>{{t}}</p>';
            },
            controller: function ($scope) {
                $scope.t = 'C3Controller is on!';
            }
        })
        .state('b', { 
	    	url: '/b',
	    	views: {
	    		'A': {
	    			template: '<h2>A视图</h2>'
               }, 
	    		'B': {
	    			template: '<h2>B视图</h2>'
	    		}
	    	}
	    })

})
app.controller('myctrl', function () {
    return alert('hello!');
})
app.run(function ($state) {
    $state.go("c1");
})
