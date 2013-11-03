angular.module('vagrantApp').factory('scoreCalculator', function(appConfig) {

  'use strict';
  
  var calc = {

    calculate: function(secondsRemaining) {
      var selectTime = appConfig.optionSelectTimeMillis / 1000;
      var score = secondsRemaining / selectTime * appConfig.maxPointsPerQuestion;
      return score.toFixed(1);
    }
  };

  return calc;
    
});