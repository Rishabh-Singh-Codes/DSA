// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Link: https://leetcode.com/problems/intersection-of-two-arrays/description/

//1st soln O(n)

var intersection = function(nums1, nums2) {
    let res = [];

    let bigArr = nums1.length > nums2.length ? nums1 : nums2;
    let smallArr = nums1.length < nums2.length ? nums1 : nums2;

    for(let i = 0; i < smallArr.length; i++) {
        if(bigArr.includes(smallArr[i]) && !res.includes(smallArr[i])) res.push(smallArr[i])
    }

    return res;
};