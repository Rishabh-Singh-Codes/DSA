// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

// Link: https://leetcode.com/problems/intersection-of-multiple-arrays/description/

//1st soln O(n)

var intersection = function(nums) {
    let arr = nums.reduce((acc, curr) => {
        acc = [...acc, ...curr];

        return acc;
    }, []);

    let map = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    }, {});

    let res = [];

    for(let key in map) {
        if(map[key] === nums.length) res.push(key);
    }

    return res;
};