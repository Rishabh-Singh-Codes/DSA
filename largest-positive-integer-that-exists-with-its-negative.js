// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.

// Link: https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/

//1st soln O(n)

var findMaxK = function(nums) {

    nums.sort((a, b) => a - b);

    for(let i = nums.length-1; i >= 0; i--) {
        if(nums.includes(-1*nums[i])) return nums[i];
    }

    return -1;
};