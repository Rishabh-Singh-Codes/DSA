// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Link: https://leetcode.com/problems/move-zeroes/description/

//1st soln O(n) w/ help

var moveZeroes = function(nums) {
    for(let i=nums.length; i>=0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }

    return nums;
};