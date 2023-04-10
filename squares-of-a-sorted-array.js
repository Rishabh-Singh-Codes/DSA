// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Link: https://leetcode.com/problems/squares-of-a-sorted-array/description/

//1st soln O(n)

var sortedSquares = function(nums) {
    let res = [];
    nums.forEach((el) => res.push(el * el));

    return res.sort((a, b) => a-b);
};