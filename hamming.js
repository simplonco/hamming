//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Hamming() {};

Hamming.prototype.compute = function (strand1, strand2) {
  var st = strand1.split("");
    var st2 = strand2.split("");
    if (st.length == st2.length) {
        var len = st.length;
        var dif = [];
        for (var i = 0; i < len; i++) {
            if (st[i] != st2[i]) {
                dif.push(i);

            }           
  return(dif);
        }
        console.log(dif.length);
    } 
   
  
    
};

module.exports = Hamming;
