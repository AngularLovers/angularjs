/**
 * Created by Administrator on 2016/4/22.
 */
angular.module('myApp', []).controller('ClockController', ['$scope', function ($scope) {
    $scope.clock = {
        now: new Date()
    };
    function updateClock() {
        $scope.clock.now = new Date();
    }
    setInterval(function () {
        $scope.$apply(updateClock)
    }, 1000)
}]);