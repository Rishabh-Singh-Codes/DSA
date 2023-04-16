// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// Link: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/description/

//1st soln O(n) w/ help

var countElements = function(nums) {
    nums.sort((a, b) => a-b);

    let cnt = 0;
    let max = nums[nums.length-1];
    let min = nums[0];

    for(let i = 0; i<nums.length; i++) {
        if(nums[i] > min && nums[i] < max) cnt++;
    }

    return cnt;
};