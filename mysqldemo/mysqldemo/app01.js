var app = angular.module('app', []);
app.controller('myCtrl', function($scope,$http) {
   
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:3030/find'
        }).then(function successCallback(res) {
            // 请求成功执行代码
            $scope.peoples=res.data;
            console.log(res.data);
        }, function errorCallback(response) {
            // 请求失败执行代码
            console.log(2);
        });
})