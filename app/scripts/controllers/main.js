'use strict';

angular.module('vagrantApp').controller('MainCtrl', function ($scope, state, $location, jsonConverter, GameModes) {
    
    $scope.play = function(mode) {
      if (mode.enabled) {
        state.mode = mode.id;
        $location.path('/game');
      }
    }

    state.gameRounds = 4;
    state.currentGameRound = 1;

    $scope.gameModes = GameModes.query(function(json) {
      return jsonConverter.convert(json);
    });
  });

