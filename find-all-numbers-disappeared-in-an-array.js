// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

//1st soln O(n)

var findDisappearedNumbers = function(nums) {
    let map = {};
    let res = [];
    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]]) map[nums[i]] +=1;
        else map[nums[i]] = 1;
    }

    for(let i = 1; i<=nums.length; i++) {
        if(!map[i]) res.push(i);
    }

    return res;
};