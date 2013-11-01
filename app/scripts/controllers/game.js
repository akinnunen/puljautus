'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, $location, $log, state) {
  $scope.state = state;
  $scope.message = 'Hello!';

  $scope.options = [
    { label: 'Kalle Roxx', value: 'kalle'},
    { label: 'Anssi Coxx', value: 'anssi'},
    { label: 'Joku Muu', value: 'joku'}
  ]

  $scope.select = function(optionId) {
    $log.info("Selected " + optionId);
    nextRound();
  }

  var nextRound = function() {
    state.currentGameRound = state.currentGameRound + 1;

    if (state.currentGameRound > state.gameRounds) {
      $location.path("/score");
    }

    $log.info("Current game round: " + state.currentGameRound)
  }

});