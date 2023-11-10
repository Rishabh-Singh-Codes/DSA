// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.

// Link: https://leetcode.com/problems/maximum-gap/description/

//1st soln O(n)

var maximumGap = function(nums) {
    if(nums.length === 1) {
        return 0;
    } else if(nums.length === 2) {
        return Math.abs(nums[0] - nums[1]);
    }

    let res = 0;

    nums.sort((a, b) => a - b);

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i-1] > res) {
            res = nums[i] - nums[i-1];
        }
    }

    return res;
};