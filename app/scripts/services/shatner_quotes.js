angular.module('vagrantApp').factory('shatnerQuotes', function(utils) {

  'use strict';

  var all = [];

  all.push('How do I stay so healthy and boyishly handsome? It\'s simple. I drink the blood of young runaways.');
  all.push('Babies have big heads and big eyes, and tiny little bodies with tiny little arms and legs. So did the aliens at Roswell! I rest my case.');
  all.push('Remember - you can\'t beam through a force field. So, don\'t try it.');
  all.push('I see people putting text messages on the phone or computer and I think, \'Why don\'t you just call?\'');
  all.push('You need to be silly to be funny.');
  all.push('I love women. I also derive a great deal of pleasure from horses and dogs...');
  all.push('As much as I love the cast of Star Trek - you can\'t put a saddle on Jimmy Doohan! Well... not twice, anyway.');
  all.push('You really don\'t know what loving is, until you\'ve gotten it from some chick wearing green body paint and plastic antennas!');
  all.push('The advantage of being taller and then making love to a bald man is the pleasure in being able to see my self reflected off his head.');
  all.push('If you make a fool of yourself, you can do it with dignity, without taking your pants down. And if you do take your pants down, you can still do it with dignity.');

  var quotes = {
    getOne: function() {
      return all[utils.rnd(all.length)];
    }
  };

  return quotes;
    
});