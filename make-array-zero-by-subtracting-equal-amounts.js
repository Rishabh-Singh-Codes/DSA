// You are given a non-negative integer array nums. In one operation, you must:
// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

// Link: https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/

//1st soln O(n) w/ help

var minimumOperations = function(nums) {
    return new Set(nums.filter((el) => el)).size;
};