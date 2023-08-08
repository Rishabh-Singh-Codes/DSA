// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Link: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

//1st soln O(n)

var subtractProductAndSum = function(n) {
    let chars = String(n).split("");

    return chars.reduce((acc, curr) => acc *= +curr, 1) - chars.reduce((acc, curr) => acc += +curr, 0);
};