// You are given a 0-indexed integer array nums.
// The concatenation of two numbers is the number formed by concatenating their numerals.
// For example, the concatenation of 15, 49 is 1549.
// The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:
// If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
// If one element exists, add its value to the concatenation value of nums, then delete it.
// Return the concatenation value of the nums.

// Link: https://leetcode.com/problems/word-pattern/description/

//1st soln O(n)

var findTheArrayConcVal = function(nums) {
    let sum = 0;
    let con = ""
    for(let i = 0; i < (nums.length)/2; i++) {
        con = i !== (nums.length - 1)/2 ? String(nums[i]) + String(nums[nums.length - i - 1]) : String(nums[i]);
        sum += +con;
    }

    return sum;
};