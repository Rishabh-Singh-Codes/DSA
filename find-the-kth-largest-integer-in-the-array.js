// You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.
// Return the string that represents the kth largest integer in nums.
// Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer.

// Link: https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/description/

//1st soln O(nlogn) w/ help

var kthLargestNumber = function(nums, k) {
    nums = nums.map(num => BigInt(num)).sort((a, b) => (a < b ? 1 : -1));

    return String(nums[k-1]);
};