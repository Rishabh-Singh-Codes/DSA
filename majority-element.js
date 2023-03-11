// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Link: https://leetcode.com/problems/majority-element/description/

//1st soln O(n)

var majorityElement = function(nums) {
    let map = {};

    for(let i = 0; i<nums.length; i++ ){
        if(map[nums[i]]) map[nums[i]] += 1;
        else map[nums[i]] = 1;
    }

    let res = null;

    Object.keys(map).map((el) => {
        if(map[el] > nums.length/2) res = el;
    });

    return res;
};