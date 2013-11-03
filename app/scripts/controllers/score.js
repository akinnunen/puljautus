'use strict';

angular.module('vagrantApp').controller('ScoreCtrl', function ($scope, $location, state, shatnerQuotes, appConfig) {

	$scope.state = state;
    $scope.shatnerQuote = shatnerQuotes.getOne();
    $scope.maxPoints = appConfig.maxPointsPerQuestion * appConfig.gameRounds;
    $scope.victory = (state.score >= $scope.maxPoints / 2);

	$scope.toMain = function() {
      $location.path('/');
    }
});