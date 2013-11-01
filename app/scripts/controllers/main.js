'use strict';

angular.module('vagrantApp').controller('MainCtrl', function ($scope, state, nameGenerator, $location, jsonConverter, GameModes) {
    $scope.gameModes = [
      {
        id: "names",
        name: "Names",
        enabled: true
      },
      {
        id: "projects",
        name: "Projects",
        enabled: false
      },
      {
        id: "competence",
        name: "Competence",
        enabled: false
      },
      {
        id: "other",
        name: "Something else",
        enabled: false
      }
    ];

    $scope.play = function(mode) {
      if (mode.enabled) {
        state.mode = mode.id;
        $location.path('/game');
      }
    }

    state.gameRounds = 4;
    state.currentGameRound = 1;

    var gameModesJson = GameModes.query(function() {
      jsonConverter.convert(gameModesJson)
    });

  });
