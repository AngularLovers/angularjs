angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'templates/home.html'
    })
    .when('/dashboard', {
      controller: 'DashboardController',
      templateUrl: 'templates/dashboard.html'
    });
}])
;