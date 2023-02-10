// Given an array nums of integers, return how many of them contain an even number of digits.

// Link: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/

//1st soln O(n)

var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i<nums.length; i++) {
        if(String(nums[i]).length%2 === 0) count++;
    }

    return count;
};