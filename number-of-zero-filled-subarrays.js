// Given an integer array nums, return the number of subarrays filled with 0.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Link: https://leetcode.com/problems/number-of-zero-filled-subarrays/description/

//1st soln O(n) w/ help

var zeroFilledSubarray = function(nums) {
    let res = 0;
    let length = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) {
            res++;
            res += length;
            length++;
        } else {
            length = 0;
        }
    }

    return res;
};