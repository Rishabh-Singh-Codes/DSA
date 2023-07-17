// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Link: https://leetcode.com/problems/majority-element-ii/description/

//1st soln O(n)

var majorityElement = function(nums) {
    if(nums.length === 1) return nums;
    let n = nums.length;
    let map = {};

    for(let i = 0; i < n; i++) {
        if(map[nums[i]]) map[nums[i]] += 1;
        else map[nums[i]] = 1;
    }

    let res = [];

    for(let num in map) {
        if(map[num] > n/3) res.push(num);
    }

    return res;
};