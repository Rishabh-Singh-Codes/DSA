// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
// Return the selected integer.

// Link: https://leetcode.com/problems/neither-minimum-nor-maximum/description/

//1st soln O(n)

var findNonMinOrMax = function(nums) {
    if(nums.length <= 2) {
        return -1;
    }

    nums.sort((a, b) => a-b);

    return nums[1];
};