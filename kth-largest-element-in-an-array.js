// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Link: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

//1st soln O(nlogn) |Used sorting|

var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => b - a);

    return nums[k-1];
};