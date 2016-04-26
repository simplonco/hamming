//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Hamming() {};
//finally i did it
Hamming.prototype.compute = function(strand1, strand2) {
  var adoar = 0;
  for (var i=0; i <= strand1.length; i++) {
      if (strand1.substr(i,1) !== strand2.substr(i,1)) {
          adora = adora + 1;
      }
  }
  return adora;
};
module.exports = Hamming;
