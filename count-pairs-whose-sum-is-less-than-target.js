// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

// Link: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

//1st soln O(n^2)

var countPairs = function(nums, target) {
    let res = 0;

    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        for(let j = i+1; j < nums.length; j++) {
            if((curr + nums[j]) < target) {
                res++;
            }
        }
    }

    return res;
};