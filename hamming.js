//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Hamming() {};

Hamming.prototype.compute = function (strand1, strand2) {
var dif =0;
for (i==0; i<= strlen(strand1); i++){
  if (strand1.substr(i, 1)!==(strand2.substr(i, 1))){
    dif= dif +1;
  }
}
return dif;
};

module.exports = Hamming;
