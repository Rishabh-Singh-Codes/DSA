// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// Link: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/

//1st soln O(n^2)

var countKDifference = function(nums, k) {
    let count = 0;
    for(let i = 0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]-nums[j]==k || nums[i]-nums[j]== -k) count++;
        }
    }

    return count;
};