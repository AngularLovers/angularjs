'use strict';

angular.module('gapappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'gapappApp.services'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});