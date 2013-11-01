'use strict';

angular.module('vagrantApp')
  .controller('MainCtrl', function ($scope, state, nameGenerator) {
    $scope.awesomeThings = [
      'Kalja',
      'Karkki',
      'Kalja'
    ];
    state.gameRounds = 4;
    state.currentGameRound = 1;

    console.log(nameGenerator.generateFirstAndLastNames(4))
  });
