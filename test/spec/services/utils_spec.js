'use strict';

describe('utils', function () {

  beforeEach(module('vagrantApp'));

  var service;

  beforeEach(inject(function (utils) {
    service = utils;
  }));

  it('should clone array without specified object values', function () {
    
    var item = { label: 'foo' };
    
    var array = [
      { label: 'foo' },
      { label: 'bar' },
      { label: 'baz' },
    ];

    array.push(item);
    
    var results = service.cloneArrayWithoutSameItemValues(array, item, 'label');

    expect(results.length).toBe(2);
  });

  it('should remove duplicate items by value', function () {
    var array = [
      { label: 'foo' },
      { label: 'foo' },
      { label: 'coo' },
      { label: 'bar' },
      { label: 'baz' },
      { label: 'bar' }
    ];

    var results = service.removeDuplicatesByItemValue(array, 'label');

    expect(results.length).toBe(4);
  });

});