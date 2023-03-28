// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Link: https://leetcode.com/problems/contains-duplicate/description/

//1st soln O(n)

var containsDuplicate = function(nums) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) return true;
        else map[nums[i]] = 1;
    }

    return false;
};