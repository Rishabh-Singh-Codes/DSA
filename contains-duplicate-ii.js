// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Link: https://leetcode.com/problems/contains-duplicate-ii/description/

//1st soln O(n) w/ help

var containsNearbyDuplicate = function(nums, k) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] !== undefined) {
            if((Math.abs(map[nums[i]] - i)) <= k) {
                return true;
            }
        }

        map[nums[i]] = i;
    }

    return false;
};