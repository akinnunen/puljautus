'use strict';

describe('roundTimer', function () {

  // load the controller's module
  beforeEach(module('vagrantApp'));

  var target;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (roundTimer) {
    target = roundTimer;
  }));

  it('should be inited to 30 secs', function () {
    expect(target.timeLeftInMillis).toBe(30000);
    expect(target.running).toBe(false);
  });

  it('should start timer', function () {
    target.start();
    expect(target.running).toBe(true);
  });
  
  it('should reset timer', function() {
    target.start();
    target.reset();
    expect(target.running).toBe(false);
  });

  it('should decrement timer', function() {
    target.decrementSecond();
    expect(target.timeLeftInMillis).toBe(29000)
  });

  it('should run clock until end', function() {
    jasmine.Clock.useMock();
    target.start();
    jasmine.Clock.tick(30000);
    expect(target.timeLeftInMillis).toBe(0);
    expect(target.running).toBe(false);
  });
  
});
