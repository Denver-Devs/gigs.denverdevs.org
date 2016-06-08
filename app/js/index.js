angular.module('app', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'html/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('API', ['$http', function($http) {
        var API = {};

        API.API_BASE = '/api/';

        API.getPosts = function(callback) {
            $http.get(API.API_BASE + 'getPosts')
                .then(function(response) {
                    console.log(response.data);
                    callback(response.data);
                }, function(error) {
                    return console.log(error);
                });
        };

        return API;
    }])
    .controller('HomeCtrl', ['$scope', 'API', function($scope, API) {
        $scope.jobs = [];
        API.getPosts(function(response) {
            $scope.jobs = response.items;
        });
    }]);
