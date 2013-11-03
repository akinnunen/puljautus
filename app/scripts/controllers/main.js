'use strict';

angular.module('vagrantApp').controller('MainCtrl', function ($scope, state, $location, jsonConverter, GameModes) {
    
  $scope.play = function(mode) {
    if (mode.enabled) {
      state.mode = mode.id;
      $location.path('/game');
    }
  }

  GameModes.all(function(json) {

    if (json == null) {
      $scope.googleSsoError = true
      return;
    }

    var modes = jsonConverter.getGameModeNamesAndUrls(json);

    angular.forEach(modes, function(mode) {

      mode.enabled = true;
      mode.id = mode.name;

      GameModes.modeOptions(mode.url, function(modeJson) {
        var options = jsonConverter.getModeOptions(modeJson);
        mode.options = options;
        $scope.gameModes = state.gameModes = modes;
      });

    });

    
  });

  state.gameRounds = 21;
  state.currentGameRound = 0;
  state.score = 0.0;

});