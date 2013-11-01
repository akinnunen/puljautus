'use strict';

angular.module('vagrantApp').controller('GameCtrl', function ($scope, $location, $log, state) {
  $scope.state = state;
  $scope.message = 'Hello!';

  // TODO: fetch this from somewhere
  var data = [
    { id:1, first: 'Kalle', last: 'Bertell', imgSrc: "images/monkey_face.jpg"},
    { id:2, first: 'Jouni', last: 'Rajala', imgSrc: "images/monkey_face.jpg"},
    { id:3, first: 'Anssi', last: 'Kinnunen', imgSrc: "images/monkey_face.jpg"},
    { id:4, first: 'Erno', last: 'Aapa', imgSrc: "images/monkey_face.jpg"},
    { id:5, first: 'Markus', last: 'Sammalahti', imgSrc: "images/monkey_face.jpg"},
    { id:6, first: 'Juha', last: 'Kuusela', imgSrc: "images/monkey_face.jpg"},
    { id:7, first: 'Matias', last: 'Kantele', imgSrc: "images/monkey_face.jpg"},
    { id:8, first: 'Matti', last: 'Pesonen', imgSrc: "images/monkey_face.jpg"},
    { id:9, first: 'Emma', last: 'Storbacka', imgSrc: "images/monkey_face.jpg"},
    { id:10, first: 'Samuel', last: 'Salmenlinna', imgSrc: "images/monkey_face.jpg"}
  ]

  $scope.select = function(optionId) {
    $log.info("Selected " + optionId);

    if (optionId == $scope.correctAnswer.id) {
      $log.info("Correct answer");
      state.score = state.score + 1; 
    } else {
      $log.info("Incorrect answer");
    }

    nextRound();
  }

  var nextRound = function() {
    state.currentGameRound = state.currentGameRound + 1;

    if (state.currentGameRound > state.gameRounds) {
      $location.path("/score");
    }

    $scope.options = generateRandomOptions();
    $scope.correctAnswer = $scope.options[rnd($scope.options.length)];
    console.log($scope.correctAnswer);

    $log.info("Current game round: " + state.currentGameRound)
  }

  var startGame = function() {
    $log.info("Starting game in mode: " + state.mode);

    nextRound();
  }

  var generateRandomOptions = function() {
    var clonedData = data.slice(0);
    var choices = [];

    $log.info("Generating 4 options from a set of " + clonedData.length);

    for (var i=0; i<4; i++) {
      var option = clonedData.splice(rnd(clonedData.length), 1)[0];
      choices.push({ 
        label: option.first + ' ' + option.last, 
        value: option.id,
        imgSrc: option.imgSrc 
      });
    }

    return choices;
  }

  var rnd = function(num) {
    return Math.floor(Math.random() * num);
  }

  startGame();

});