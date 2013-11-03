'use strict';

angular.module('vagrantApp').controller('ScoreCtrl', function ($scope, $location, state, shatnerQuotes, appConfig) {

	$scope.state = state;
    $scope.shatnerQuote = shatnerQuotes.getOne();
    $scope.maxPoints = appConfig.maxPointsPerQuestion * appConfig.gameRounds;

	$scope.toMain = function() {
      $location.path('/');
    }
});