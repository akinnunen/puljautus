'use strict';

angular.module('vagrantApp').controller('MainCtrl', function ($scope, state, nameGenerator, $location, jsonConverter, GameModes) {
    $scope.play = function(mode) {
      if (mode.enabled) {
        state.mode = mode.id;
        $location.path('/game');
      }
    }

    state.gameRounds = 4;
    state.currentGameRound = 1;

    $scope.gameModes = GameModes.query(function() {
      jsonConverter.convert(gameModesJson)
    });
  });
