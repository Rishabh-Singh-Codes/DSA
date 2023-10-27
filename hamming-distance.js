// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

// Link: https://leetcode.com/problems/hamming-distance/description/

//1st soln O(n)

var hammingDistance = function(x, y) {
    let x2 = x.toString(2).split("");
    let y2 = y.toString(2).split("");

    let diff = Math.abs(y2.length - x2.length);

    if(x2.length < y2.length) {
        while(diff > 0) {
            x2.unshift('0');
            diff--;
        }
    } else {
        while(diff > 0) {
            y2.unshift('0');
            diff--;
        }
    }

    let res = 0;

    for(let i = 0 ; i < x2.length; i++) {
        if(x2[i] !== y2[i]) {
            res++;
        }
    }

    return res;
};