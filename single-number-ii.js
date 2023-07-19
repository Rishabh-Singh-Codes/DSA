// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Link: https://leetcode.com/problems/single-number-ii/description/

//1st soln O(n)

var singleNumber = function(nums) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }

    for(let num in map) {
        if(map[num] === 1) {
            return num;
        }
    }
};