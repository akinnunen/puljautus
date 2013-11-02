'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, $location, $log, state, $filter, nameGenerator, roundTimer, appConfig, scoreCalculator) {
  
  if (state.mode === undefined) {
    $location.path('/');
    return;
  }

  // Called when player selects an option
  $scope.select = function(index) {

    if ($scope.options[index].disabled)
      return;

    $scope.timer.stop();
    disableOptions()

    if (index == $scope.correctAnswer.index) {
      state.score = (parseFloat(state.score) + parseFloat(scoreCalculator.calculate($scope.timer.timeLeftInMillis / 1000))).toFixed(1);
      $scope.options[index].correct = true
    } else {
      $scope.options[index].incorrect = true
    }

    // Let the player view the results for a while
    setTimeout(function() {
      $scope.$apply(function() {
        nextRound();
      });
    }, appConfig.optionSelectTimeoutMillis);
  }

  // Player cannot click links anymore after selection
  var disableOptions = function() {
    angular.forEach($scope.options, function(option) {
      option.disabled = true;
    });
  }

  // Called when game starts or player has answered
  var nextRound = function() {

    $scope.timer.reset();
    $scope.timer.start();

    state.currentGameRound = state.currentGameRound + 1;

    if (state.currentGameRound > state.gameRounds) {
      $location.path("/score");
    }

    // Fetch current game mode fronm the JSON
    var data = $filter('getByMode')(state.gameModes, state.mode).options;

    $scope.options = nameGenerator.generateRandomOptions(4, data);
    $scope.correctAnswer = $scope.options[nameGenerator.rnd($scope.options.length)];

    console.log($scope.options.length)

    console.log($scope.correctAnswer);
  }

  var startGame = function() {

  $scope.state = state;
  $scope.timer = roundTimer;



   // Since $scope.$watch 'timer' does not work
  setInterval(function() {
    $scope.$apply();
  }, 1000); 

    nextRound();
  }

  startGame();

});