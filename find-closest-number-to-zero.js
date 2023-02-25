// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Link: https://leetcode.com/problems/find-closest-number-to-zero/description/

//1st soln O(n) w/ help

var findClosestNumber = function(nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    if(nums.includes(Math.abs(nums[0]))) return Math.abs(nums[0])
    return nums[0]
};