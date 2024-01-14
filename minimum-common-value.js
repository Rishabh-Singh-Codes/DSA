// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Link: https://leetcode.com/problems/minimum-common-value/description/

//1st soln O(n) w/ help

var getCommon = function(nums1, nums2) {
    const set = new Set(nums1);

    for(const n of nums2) {
        if(set.has(n)) {
            return n;
        }
    }

    return -1;
};