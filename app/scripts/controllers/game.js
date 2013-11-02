'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, $location, $log, state, $filter, nameGenerator) {
  if (state.mode === undefined) {
    $location.path('/');
  }

  $scope.state = state;
  $scope.message = 'Hello!';

  var data = $filter('getByMode')(state.gameModes, state.mode).options;

  $scope.select = function(index) {

    $log.info("Selected " + index);

    if (index == $scope.correctAnswer.index) {
      state.score = state.score + 1;
      $scope.options[index].correct = true
    } else {
      $scope.options[index].incorrect = true
    }

    setTimeout(function() {
      nextRound();
      $scope.$apply();
    }, 1500);
  }

  var nextRound = function() {

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