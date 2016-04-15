'use strict';

angular.module('gapappApp')
  .controller('MainController', function($scope, Cordova) {
    Cordova.navigator().then(function(n) {
      navigator.notification.vibrate();
    });
  });
