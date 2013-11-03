angular.module('vagrantApp').factory('roundTimer', function (appConfig) {
    
  'use strict';

  var RoundTimer = function() {
    this.timeLeftInMillis = appConfig.optionSelectTimeMillis;
    this.running = false;
  };

  RoundTimer.prototype.start = function() {
    this.running = true;
    this.activeTimeout = null;

    var timer = this;

    var countdown = function() {
      timer.decrementSecond();
      if (timer.timeLeftInMillis > 0) {
        timer.activeTimeout = setTimeout(countdown, 1000);
      } else {
        timer.running = false;
        timer.timeLeftInMillis = 0;
      }
    };

    setTimeout(countdown, 1000);
  };

  RoundTimer.prototype.decrementSecond = function() {
    this.timeLeftInMillis = this.timeLeftInMillis - 1000;
  };

  RoundTimer.prototype.incrementSecond = function() {
    this.timeLeftInMillis = this.timeLeftInMillis + 1000;
  };

  RoundTimer.prototype.reset = function() {
    if (this.activeTimeout) {
      clearTimeout(this.activeTimeout);
    }

    this.running = false;
    this.timeLeftInMillis = appConfig.optionSelectTimeMillis;
  };

  RoundTimer.prototype.stop = function() {
    if (this.activeTimeout) {
      clearTimeout(this.activeTimeout);
    }

    this.running = false;
  };

  return new RoundTimer();

});