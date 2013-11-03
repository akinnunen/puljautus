angular.module('vagrantApp').factory('nameGenerator', function() {
    
  'use strict';

  var generator = {

    generateRandomOptions: function(n, data) {

      var clonedData = data.slice(0);
      var choices = [];

      // $log.info("Generating 4 options from a set of " + clonedData.length);

      for (var i = 0; i < n; i++) {
        var option = clonedData.splice(generator.rnd(clonedData.length), 1)[0];
        choices.push({
          label: option.label,
          index: i,
          imgUrl: option.imgUrl
        });
      }

      return choices;
    },

    rnd: function(num) {
      return Math.floor(Math.random() * num);
    }

  };

  return generator;

});