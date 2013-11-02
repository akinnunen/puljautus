'use strict';

angular.module('vagrantApp').controller('ScoreCtrl', function ($scope, $location, state) {
	$scope.state = state;

	$scope.toMain = function() {
      $location.path('/');
    }
});