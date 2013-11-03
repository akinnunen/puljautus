'use strict';

angular.module('vagrantApp').controller('MainCtrl', function ($scope, state, $location, jsonConverter, GameModes, appConfig, imagePreloader, $q) {
    
  $scope.play = function(mode) {
    if (mode.enabled) {
      state.mode = mode.id;
      $location.path('/game');
    }
  };

  GameModes.all().then(function(json) {
    return json.data;
  }, function() {
    $scope.googleSsoError = true;
  }).then(function(modesJson) {

    if ($scope.googleSsoError) {
      return;
    }
      
    var modes = jsonConverter.getGameModeNamesAndUrls(modesJson);

    // Make queries for each sheet and construct promises array
    var promises = [];
    
    angular.forEach(modes, function(mode) {
      mode.enabled = true; // These should be passed via the Google Docs JSON somehow
      mode.id = mode.name;
      promises.push(GameModes.modeOptions(mode.url));
    });

    // Wait for each request to finish and process the responses
    $q.all(promises).then(function(modesOptionsJson) {

      // Assign options for each game mode
      angular.forEach(modesOptionsJson, function(modeOptionsJson, index) {
        var options = jsonConverter.getModeOptions(modeOptionsJson.data);
        modes[index].options = options;
      });

      $scope.gameModes = state.gameModes = modes;

      imagePreloader.preloadForAllModes(modes);

    });

  });

  state.gameRounds = appConfig.gameRounds;
  state.currentGameRound = 0;
  state.score = 0.0;

});