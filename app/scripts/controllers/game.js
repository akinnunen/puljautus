'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, state) {
  $scope.state = state;
  $scope.message = 'Hello!'
});