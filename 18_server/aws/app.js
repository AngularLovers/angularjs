angular.module('myApp', 
  ['ngRoute', 'myApp.services', 'myApp.directives']
)
.config(function(AWSServiceProvider) {
  AWSServiceProvider.setArn('arn:aws:iam::<ACCOUNT_ID>:role/google-web-role');
})
.config(function(StripeServiceProvider) {
  StripeServiceProvider.setPublishableKey('pk_test_YOURKEY');
})
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'templates/main.html',
  })
  .otherwise({
    redirectTo: '/'
  });
});

window.onLoadCallback = function() {
  angular.element(document).ready(function() {
    gapi.client.load('oauth2', 'v2', function() {
      angular.bootstrap(
        document,
        ['myApp']
      );
    });
  });
}