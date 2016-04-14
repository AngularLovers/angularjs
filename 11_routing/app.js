angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      template: '\
        <a href="#inbox/ari">View Your Inbox</a>\
      '
    })
    .when('/inbox/:name', {
      controller: 'InboxController',
      template: '\
        <h1>Welcome to your inbox, {{ name }}</h1>\
        <a href="#/">Back</a>\
      '
    })
    .otherwise({redirectTo: '/'});
}])

.controller('HomeController', function($scope) {
  // define controller to prevent console error
})

.controller('InboxController', function($scope, $routeParams, $location) {
  $scope.name = $routeParams.name;
});