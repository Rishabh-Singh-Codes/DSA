// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

// Link: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/description/

//1st soln O(n^2)

var countPairs = function(nums, k) {
    let res = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j] && (i*j) % k === 0) res++;
        }
    }

    return res;
};