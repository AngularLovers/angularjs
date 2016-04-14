angular.module('myApp', [])
.controller('ParentController', function($scope) {
  $scope.name = "Erik";
})
.controller('EriksController', function($scope) {
  $scope.heyThere = "Ari";
  console.log("Instantiated");
})
.controller("ChildController", function($scope) {
  console.log("inside childController");
  // $scope.
})
.directive('someHello', function() {
  console.log("Loading someController");
  return { controller: function($scope) {
    console.log("Loading someHello directive's Controller");
  } }
})
.directive('anotherHello', function() {
  console.log("Loading anotherHello");
  return { controller: function($scope) {
    console.log("Loading anotherHello directive's Controller");
  } }
})
.directive('myDirective', function() {
  return {
    restrict: 'A',
    replace: true,
    require: ['^someHello', 'anotherHello'],
    scope: {
      myUrl: '@someAttr',
      myLinkText: '=',
      someController: '=someHello'
    },
    template: '<div><a href="{{myUrl}}">{{myLinkText}}</a> {{someController}}</div>',
    link: function(scope, iElement, iAttr, ngModelController) {
      // ngModelController.myUrl = "hey from link function";
      console.log(scope.someController,
        iAttr.someController,
        ngModelController,
        ngModelController[0] === iElement.inheritedData().$someHelloController,
        iElement.inheritedData());
    }
  };
});