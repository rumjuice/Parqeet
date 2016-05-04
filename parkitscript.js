var app=angular.module('parkIt', []);
app.controller('CounterController', function($scope) {
  $scope.count = 50;
  var max = $scope.count + 0;
  var min = $scope.count - 50;
  $scope.increment = function() {
    if ($scope.count >= max) { return; }
    $scope.count++;
  };
  $scope.decrement = function() {
    if ($scope.count <= min) { return; }
    $scope.count--;
  };
});
