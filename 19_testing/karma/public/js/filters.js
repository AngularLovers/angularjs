angular.module('myApp')
.filter('capitalize', function() {
  return function(input) {

    // input will be the string we pass in
    if (input) 
      return input[0].toUpperCase() + input.slice(1);
  }
});