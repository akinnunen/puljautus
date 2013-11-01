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
  });
});
