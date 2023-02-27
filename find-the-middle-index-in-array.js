// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).
// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].
// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.
// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

// Link: https://leetcode.com/problems/find-the-middle-index-in-array/description/

//1st soln O(n)

var findMiddleIndex = function(nums) {
    let sumLeft = 0;
    let sumRight = 0;

    for(let i = 0; i < nums.length; i++) {
        sumLeft = nums.slice(0,i)?.reduce(((a,c) => a+c),0)
        sumRight = nums.slice(i+1,nums.length)?.reduce(((a,c) => a+c),0);
        if (sumLeft === sumRight) return i;
    }

    return -1;
};