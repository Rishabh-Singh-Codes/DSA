// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

// Link: https://leetcode.com/problems/perfect-number/description/

//1st soln O(n) w/ help

var checkPerfectNumber = function(num) {
    if(num <= 1) {
        return false;
    }

    let sum = 0;

    for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num%i === 0) {
            sum += i + (num/i);
        }
    }

    return sum === 2 * num;
};

//2nd soln O(n) but close to TLE (1st soln is better)

var checkPerfectNumber = function(num) {
    let sum = 0;
    for(let i = 1; i <= num/2; i++) {
        if(num%i === 0) {
            sum += i;
        }
    }

    return sum === num;
};