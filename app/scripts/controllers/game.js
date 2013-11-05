'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, $location, state, roundTimer, appConfig, scoreCalculator, utils) {
  
  if (state.mode === undefined) {
    $location.path('/');
    return;
  }

  // Called when player selects an option
  $scope.select = function(answer) {

    if (answer.disabled) {
      return;
    }

    $scope.timer.stop();
    disableOptions();

    if (answer === $scope.correctAnswer) {
      state.score = (parseFloat(state.score) + parseFloat(scoreCalculator.calculate($scope.timer.timeLeftInMillis / 1000))).toFixed(1);
      answer.correct = true;
    } else {
      answer.incorrect = true;
      $scope.correctAnswer.correct = true;
    }

    // Let the player view the results for a while
    setTimeout(function() {
      $scope.$apply(function() {
        nextRound();
      });
    }, appConfig.optionSelectTimeoutMillis);
  };

  // Player cannot click links anymore after selection
  var disableOptions = function() {
    angular.forEach($scope.options, function(option) {
      option.disabled = true;
    });
  };

  // Clear all flags set in this round
  var clearOptionFlags = function() {
    angular.forEach($scope.options, function(option) {
      delete option.disabled;
      delete option.correct;
      delete option.incorrect;
    });
  };

  // Called when game starts or player has answered
  var nextRound = function() {

    state.currentGameRound = state.currentGameRound + 1;

    if (state.currentGameRound > state.gameRounds) {
      $location.path('/score');
      return;
    }

    clearOptionFlags();

    $scope.timer.reset();
    $scope.timer.start();

    setupRoundOptions();
  };

  var setupRoundOptions = function() {

    $scope.options = [];

    $scope.correctAnswer = state.options[state.currentGameRound - 1];
    $scope.options.push($scope.correctAnswer);

    var allExceptCorrect = utils.cloneArrayWithoutSameItemValues(state.options, $scope.correctAnswer, 'label');
    var noDuplicates = utils.removeDuplicatesByItemValue(allExceptCorrect, 'label');
    var incorrectAnswers = utils.shuffleArray(noDuplicates, appConfig.questionsPerRound - 1);
    
    $scope.options = utils.shuffleArray($scope.options.concat(incorrectAnswers));
  };

  var startGame = function() {

    $scope.state = state;
    $scope.timer = roundTimer;

     // Since $scope.$watch 'timer' does not work
    setInterval(function() {
      $scope.$apply();
    }, 1000);

    nextRound();
  };

  startGame();

});