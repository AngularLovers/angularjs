angular.module('myApp', [
  'ngRoute',
  'myApp.services'
])
.controller('HomeController', function($scope, HitService) {
  HitService.count().then(function(data) {
    $scope.hits = data;
  })

  $scope.registerHit = function() {
    HitService.registerHit().then(function(data) {
      $scope.hits = data;
    })
  }
});
