// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Link: https://leetcode.com/problems/minimum-size-subarray-sum/description/

//1st soln O(n) w/ help

var minSubArrayLen = function(target, nums) {
    let left = 0; 
    let right = 0;
    let currSum = 0;
    let res = Number.MAX_VALUE;

    for(right = 0; right < nums.length; right++){
        currSum += nums[right];

        while(currSum >= target) {
            res = Math.min(res, right-left+1);
            currSum -= nums[left];
            left++;
        }
    }

    if(res === Number.MAX_VALUE) {
        return 0;
    } else {
        return res;
    }
};