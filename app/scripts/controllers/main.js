'use strict';

angular.module('vagrantApp').controller('MainCtrl', function ($scope, state, $location, jsonConverter, GameModes) {
    
  $scope.play = function(mode) {
    if (mode.enabled) {
      state.mode = mode.id;
      $location.path('/game');
    }
  }

  GameModes.query(function(json) {
    state.gameModes = $scope.gameModes = jsonConverter.convert(json);
  });

  state.gameRounds = 4;
  state.currentGameRound = 0;  

});
