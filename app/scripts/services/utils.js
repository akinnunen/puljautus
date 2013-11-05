angular.module('vagrantApp').factory('utils', function () {
  
  'use strict';

  var utils = {

    // From http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    shuffleArray: function(array, numberOfItems) {
      
      var counter = array.length, temp, index;
      
      while (counter--) {
        index = Math.floor(Math.random() * counter);
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      if (numberOfItems) {
        return array.splice(0, numberOfItems);
      } else {
        return array;
      }
    },

    cloneArrayWithoutAnItem: function(array, item) {
      var cloned = array.slice(0);
      cloned.splice(array.indexOf(item), 1);
      return cloned;
    },

    cloneArrayWithoutSameItemValues: function(array, item, attributeName) {
      var cloned = array.slice(0);
      var results = [];
      for (var each in cloned) {
        if (cloned[each][attributeName] !== item[attributeName]) {
          results.push(cloned[each]);
        }
      }
      return results;
    },

    removeDuplicatesByItemValue: function(array, attributeName) {
      var uniques = [];
      for(var each in array) {
        var value = array[each][attributeName];
        if (uniques.indexOf(value) === -1) {
          uniques.push(value);
        } else {
          array.splice(each, 1);
        }
      }
      return array;
    },

    rnd: function(num) {
      return Math.floor(Math.random() * num);
    }

  };

  return utils;

});