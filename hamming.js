function Hamming() {}
//finally i did it
Hamming.prototype.compute = function(strand1, strand2) {
    var dif = 0;
    for (var i = 0; i <= strand1.length; i++) {
        if (strand1[i] != strand2[i]) {
            dif = dif + 1;
        }
    }
    return dif;
};

module.exports = Hamming;
