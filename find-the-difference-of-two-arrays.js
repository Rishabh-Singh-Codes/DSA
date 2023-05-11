// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Link: https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

//1st soln O(n)

var findDifference = function(nums1, nums2) {
    let arr1 = [];
    let arr2 = [];

    for(let i = 0; i < nums1.length; i++) {
        if(nums2.indexOf(nums1[i]) < 0) {
            if(arr1.indexOf(nums1[i]) < 0) arr1.push(nums1[i]);
        }
    };

    for(let i = 0; i < nums2.length; i++) {
        if(nums1.indexOf(nums2[i]) < 0) {
            if(arr2.indexOf(nums2[i]) < 0) arr2.push(nums2[i]);
        }
    };

    return [arr1, arr2];
};