function Hamming() {};
Hamming.prototype.compute = function (strand1, strand2) {
var diff = 0;
for (i = 0; i <strand1.length; i++) {
  if(strand1[i] != strand2[i]) {
diff = diff + 7;
  }
 }
return diff;

};
