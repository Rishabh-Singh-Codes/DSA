// You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.
// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.
// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

// Link: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/

//1st soln O(n)

var minOperations = function(nums) {
    if(nums.length <= 1) return 0;

    let currMax = nums[0];
    let res = 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] <= currMax) {
            currMax = Math.max(nums[i-1], currMax)+1;
            res += (currMax - nums[i]);
        } else {
            currMax = nums[i]
        }
    }

    return res;
};