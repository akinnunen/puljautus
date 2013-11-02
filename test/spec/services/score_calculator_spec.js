'use strict';

describe('scoreCalculator', function () {

  // load the controller's module
  beforeEach(module('vagrantApp'));

  var calc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (scoreCalculator) {
    calc = scoreCalculator;    
  }));

  it('should give full score with 30 seconds time left', function () {
    var secondsRemaining = 30;
    expect(calc.calculate(secondsRemaining.toString())).toBe('10.0');
  });

  it('should give half score with 15 seconds time left', function () {
    expect(calc.calculate(15).toString()).toBe('5.0');
  });

  it('should give 40% of the full score with 12 seconds time left', function () {
    expect(calc.calculate(12).toString()).toBe('4.0');
  });

});