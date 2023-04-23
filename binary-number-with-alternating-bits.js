// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

// Link: https://leetcode.com/problems/binary-number-with-alternating-bits/description/

//1st soln O(n)

var hasAlternatingBits = function(n) {
    let bin = (n >>> 0).toString(2);

    for(let i = 1; i<bin.length; i++) {
        if(bin[i]===bin[i-1]) return false;
    }

    return true;
};