'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, state) {
  $scope.state = state;
  $scope.message = 'Hello!';

  $scope.nextRound = function() {
    state.currentGameRound = state.currentGameRound + 1;
    console.log(state.currentGameRound)
  }
});