angular.module('myApp')
.controller('MainCtrl', 
  function($scope, AWSService, UserService, StripeService) {
    $scope.signedIn = function(oauth) {
      UserService.setCurrentUser(oauth)
      .then(function(user) {
        $scope.user = user;
      });
    }

    var getItemsForSale = function() {
      UserService.itemsForSale()
      .then(function(images) {
        $scope.images = images;
      });
    }

    $scope.onFile = function(files) {
      UserService.uploadItemForSale(files)
      .then(function(data) {
        getItemsForSale();
      });
    }

    $scope.sellImage = function(image) {
      $scope.showCC = true;
      $scope.currentItem = image;
    }

    $scope.submitPayment = function() {
      UserService
        .createPayment($scope.currentItem, $scope.charge)
      .then(function(data) {
        $scope.showCC = false;
      });
    }

    getItemsForSale();
});