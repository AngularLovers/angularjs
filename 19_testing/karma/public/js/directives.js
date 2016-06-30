angular.module('myApp')
.directive('notification', function($timeout) {
  var html = '<div class="notification">' +
              '<div class="notification-content">' +
                '<p>{{ message }}</p>' +
              '</div>' +
            '</div>';

  return {
    restrict: 'EA',
    scope: {
      message: '='
    },
    template: html,
    replace: true,
    link: function(scope, ele, attrs) {
      scope.$watch('message', function(n, o) {
        if (n) {
          $timeout(function() {
            ele.addClass('ng-hide');
          }, 2000);
        }
      });
    }
  }
});