// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Link: https://leetcode.com/problems/add-to-array-form-of-integer/description/

//1st soln O(n) w/ help

var addToArrayForm = function(num, k) {
    let n = BigInt(num.join(""));
    let sum = n + BigInt(k);

    let res = String(sum).split("");

    return res;
};