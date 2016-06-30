angular.module('gapappApp.services')
.factory('Cordova', function($q) {
  var d = $q.defer();
  
  if (typeof(window.navigator) !== "undefined") {
    d.resolve(window.navigator);
  } else {
    document
    .addEventListener('deviceready', function(evt) {
      d.resolve(navigator);
    });
  }

  return {
    navigator: function() {
      return d.promise;
    }
  }
})