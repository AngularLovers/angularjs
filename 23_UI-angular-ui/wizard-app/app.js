angular.module('wizardApp', [
  'ui.router',
  'wizardApp.controllers'
]);

angular.module('wizardApp.controllers', [])
.controller('WizardSignupController',
  ['$scope', '$state', function($scope, $state) {
    $scope.user = {};
    $scope.signup = function($window) {
      $window.alert('Signup Wizard is complete. Have a nice day!');
    };
}])

.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('wizard', {
      abstract: true,
      url: '/wizard',
      template: '<div ui-view></div>'
    })
    .state('wizard.start', {
      url: '/step_1',
      template: '\
        <h1>Welcome to step 1</h1>\
        <a ui-sref="wizard.email">Click here for step 2</a>\
      '
    })
    .state('wizard.email', {
      url: '/step_2',
      template: '\
        <h1>Hey, nice to see you made it to step 2</h1>\
        <a ui-sref="wizard.finish">Click here for step 3</a>\
      '
    })
    .state('wizard.finish', {
      url: '/finish',
      template: "<h1>You've made it to step 3, yay!</h1>",
      controller: function($scope, $window) {
        $scope.signup($window);
      }
    });
}]);