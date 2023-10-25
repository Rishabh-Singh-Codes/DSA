// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Link: https://leetcode.com/problems/power-of-four/description/

//1st soln O(n) w/ help

var isPowerOfFour = function(n) {
    if(n === 0) {
        return false;
    }

    if(n === 1) {
        return true;
    }

    while(n > 1) {
        n /= 4;
        if(n === 1) {
            return true;
        }
    }

    return false;
};