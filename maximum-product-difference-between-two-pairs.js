// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
// Return the maximum such product difference.

// Link: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/

//1st soln O(n)

var maxProductDifference = function(nums) {
    let sortArr = nums.sort(function (a, b) {
        return a-b;
    });
    return ((sortArr[sortArr.length-1]*sortArr[sortArr.length-2]) - (sortArr[0]*sortArr[1]));
};

//2nd soln O(n)

var maxProductDifference = function(nums) {
    nums.sort(function (a, b) {
        return a-b;
    });
    return ((nums[nums.length-1]*nums[nums.length-2]) - (nums[0]*nums[1]));
};