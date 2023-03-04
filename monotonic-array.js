// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Link: https://leetcode.com/problems/monotonic-array/description/

//1st soln O(n) w/ help

var isMonotonic = function(nums) {
    return (
        nums.every((el, i) => i === 0 || el <= nums[i-1]) || 
        nums.every((el, i) => i === 0 || el >= nums[i-1])
    )
};