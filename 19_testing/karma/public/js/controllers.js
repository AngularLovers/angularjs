angular.module('myApp')
.controller('HomeController', function($scope) {
  $scope.emails = [
    {
      from: 'ari@fullstack.io', 
      subject: 'ng-book and things'
    },
    {
      from: 'ari@fullstack.io', 
      subject: 'Other things about ng-book and angular'
    },
    {
      from: 'ted@google.com', 
      subject: 'Conference speaking gig'
    }
  ];

  $scope.message = "Welcome";
})
.controller('DashboardController', function($scope) {
});