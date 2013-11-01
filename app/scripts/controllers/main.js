'use strict';

angular.module('vagrantApp')
  .controller('MainCtrl', function ($scope, state, nameGenerator) {
    $scope.gameModes = [
    	{
    		id: "names",
    		name: "Names",
    		enabled: true
    	},
    	{
    		id: "projects",
    		name: "Projects",
    		enabled: false
    	},
    	{
    		id: "competence",
    		name: "Competence",
    		enabled: false
    	},
    	{
    		id: "other",
    		name: "Something else",
    		enabled: false
    	}
    ];

    $scope.play = function(mode) {
    	console.log("Play: " + mode.id);
    }

    state.gameRounds = 4;
    state.currentGameRound = 1;

    console.log(nameGenerator.generateFirstAndLastNames(4))
  });
