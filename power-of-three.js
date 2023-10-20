// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Link: https://leetcode.com/problems/power-of-three/description/

//1st soln O(n) w/ help

var isPowerOfThree = function(n) {
    if(n === 1) {
        return true;
    }

    while(n > 1) {
        n /= 3;

        if(n === 1) {
            return true;
        }
    }

    return false;
};