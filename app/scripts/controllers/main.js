'use strict';

angular.module('vagrantApp')
  .controller('MainCtrl', function ($scope, state) {
    $scope.awesomeThings = [
      'Kalja',
      'Karkki',
      'Kalja'
    ];
    state.gameRounds = 4;
    state.currentGameRound = 1;
  });
