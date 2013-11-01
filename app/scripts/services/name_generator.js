angular.module('vagrantApp').factory('nameGenerator', function () {
    
  'use strict';

  var firstNames = ['Leanne','Edward','Haydee','Lyle','Shea','Curtis','Roselyn','Marcus','Lyn','Lloyd','Isabelle','Francis','Olivia','Roman','Myong','Jamie','Alexis','Vernon','Chloe','Max','Kirstie','Tyler','Katelin','Alejandro','Hannah','Gavin','Lynetta','Russell','Neida','Kurt','Dannielle','Aiden','Janett','Vaughn','Michelle','Brian','Maisha','Theo','Emma','Cedric','Jocelyn','Darrell','Grace','Ivan','Rikki','Erik','Madeleine','Rufus','Florance','Raymond','Jenette','Danny','Kathy','Michael','Layla','Rolf','Selma','Anton','Rosie','Craig','Victoria','Andy','Lorelei','Drew','Yuri','Miles','Raisa','Rico','Rosanne','Cory','Dori','Travis','Joslyn','Austin','Haley','Ian','Liza','Rickey','Susana','Stephen','Richelle','Lance','Jetta','Heath','Juliana','Rene','Madelyn','Stan','Eleanore','Jason','Alexa','Adam','Jenna','Warren','Cecilia','Benito','Elaine','Mitch','Raylene','Cyrus'];
  var lastNames = ['Flinn','Young','Milligan','Keesee','Mercer','Chapman','Zobel','Carter','Pettey','Starck','Raymond','Pullman','Drolet','Higgins','Matzen','Tindel','Winter','Charley','Schaefer','Hancock','Dampier','Garling','Verde','Lenihan','Rhymer','Pleiman','Dunham','Seabury','Goudy','Latshaw','Whitson','Cumbie','Webster','Bourquin','Connor','Rikard','Brier','Luck','Porras','Gilmore','Turner','Sprowl','Rohloff','Magby','Wallis','Mullens','Correa','Murphy','Bryd','Gamble','Castleman','Pace','Durrett','Bourne','Hottle','Oldman','Paquette','Stine','Muldoon','Smit','Finn','Kilmer','Sager','White','Friedrich','Fennell','Miers','Carroll','Freeman','Hollis','Neal','Remus','Pickering','Woodrum','Bradbury','Caffey','Tuck','Jensen','Shelly','Hyder','Krumm','Hundt','Seal','Pendergast','Kelsey','Milling','Karst','Helland','Risley','Grieve','Paschall','Coolidge','Furlough','Brandt','Cadena','Rebelo','Leath','Backer','Bickers','Cappel'];

  var generator = {

    generateFirstAndLastNames: function(n) {
      
      var results = [];
      
      for (var i = 0; i < n; i++) {
        var first = lastNames[Math.floor(Math.random() * firstNames.length)];
        var last = firstNames[Math.floor(Math.random() * firstNames.length)];
        results.push({ first: first, last: last })
      }

      return results;
    }

  };

  return generator;

});