'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, $location, $log, state, $filter, nameGenerator, roundTimer) {
  
  if (state.mode === undefined) {
    $location.path('/');
    return;
  }

  $scope.state = state;
  $scope.timer = roundTimer;

  // Fetch current game mode fronm the JSON
  var data = $filter('getByMode')(state.gameModes, state.mode).options;

   // Since $scope.$watch 'timer' does not work
  setInterval(function() {
    $scope.$apply();
  }, 1000); 

  // Called when player selects an option
  $scope.select = function(index) {

    $log.info("Selected " + index);

    if (index == $scope.correctAnswer.index) {
      state.score = state.score + 1;
      $scope.options[index].correct = true
    } else {
      $scope.options[index].incorrect = true
    }

    setTimeout(function() {
      $scope.$apply(function() {
        nextRound();
      });
    }, 1500);
  }

  // Called when game starts or player has answered
  var nextRound = function() {

    $scope.timer.reset();
    $scope.timer.start();

    state.currentGameRound = state.currentGameRound + 1;

    if (state.currentGameRound > state.gameRounds) {
      $location.path("/score");
    }

    $scope.options = nameGenerator.generateRandomOptions(4, data);
    $scope.correctAnswer = $scope.options[nameGenerator.rnd($scope.options.length)];

    console.log($scope.correctAnswer);
    console.log($scope.options);

    $log.info("Current game round: " + state.currentGameRound)
  }

  var startGame = function() {
    $log.info("Starting game in mode: " + state.mode);
    nextRound();
  }

  startGame();

});