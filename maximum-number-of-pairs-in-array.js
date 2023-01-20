// You are given a 0-indexed integer array nums. In one operation, you may do the following:
// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.
// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

// Link: https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/

//1st soln O(n)

var numberOfPairs = function(nums) {
    let map = {};

    for(let i =0; i< nums.length; i++) {
        if(map[nums[i]]) map[nums[i]]+=1;
        else map[nums[i]]=1;
    }

    let pair = 0;
    let left = 0;

    let vals = Object.values(map);

    for(let i = 0; i< vals.length; i++) {
        pair += Math.floor(vals[i]/2);
        left += vals[i]%2;
    }

    return [pair, left];
};