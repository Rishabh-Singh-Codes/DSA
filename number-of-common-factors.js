// Given two positive integers a and b, return the number of common factors of a and b.
// An integer x is a common factor of a and b if x divides both a and b.

// Link: https://leetcode.com/problems/number-of-common-factors/description/

//1st soln O(n)

var commonFactors = function(a, b) {
    let cnt = 0;
    let num = a < b ? a : b;
    for(let i = 0; i <= num; i++) {
        if(a%i === 0 && b%i === 0) {
            cnt++;
        }
    }

    return cnt;
};