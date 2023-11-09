// Given an integer n, return the number of trailing zeroes in n!.
// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Link: https://leetcode.com/problems/factorial-trailing-zeroes/description/

//1st soln O(n) w/ help

var trailingZeroes = function(n) {
    let res = 0;
    
    for(let i = 5; i <= n; i*=5) {
        res += Math.floor(n/i);
    }

    return res;
};