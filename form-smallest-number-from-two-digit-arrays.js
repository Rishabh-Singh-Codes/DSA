// Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.

// Link: https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/description/

//1st soln O(n) w/ help

var minNumber = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    for(let i = 0; i < nums1.length; i++) {
        if(nums2.includes(nums1[i])) {
            return nums1[i];
        }
    }

    if(nums1[0] < nums2[0]) {
        return Number(String(nums1[0]) + String(nums2[0]));
    } else {
        return Number(String(nums2[0]) + String(nums1[0]));
    }
};