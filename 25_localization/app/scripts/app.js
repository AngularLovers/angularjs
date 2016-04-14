angular.module('myApp', ['gettext'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  });
})
.controller('HomeController', function($scope, gettextCatalog) {
  $scope.user = {
    name: "Ari"
  }
  $scope.count = 1;

  $scope.changeLanguage = function() {
    gettextCatalog.currentLanguage = 'es';
  }
})