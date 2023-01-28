// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.
// You then do the following steps:
// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

// Link: https://leetcode.com/problems/word-pattern/description/

//1st soln O(n)

var findFinalValue = function(nums, original) {
    let map = {};

    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]]) map[nums[i]] += 1;
        else map[nums[i]] = 1;
    }


    while(true) {
        if (map[original]) original *= 2;
        else return original;
    }
};


//2nd soln O(n)

var findFinalValue = function(nums, original) {
    while(true) {
        if(nums.includes(original)) original *= 2;
        else return original;
    } 
};