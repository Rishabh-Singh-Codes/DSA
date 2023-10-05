// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Link: https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

//1st soln O(n) w/ help

var findDuplicates = function(nums) {
    let map = {};

    let res = nums.filter(num => {
        map[num] = (map[num] || 0) + 1;

        return map[num] > 1;
    });

    return res;
};