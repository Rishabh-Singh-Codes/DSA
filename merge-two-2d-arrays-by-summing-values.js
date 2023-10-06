// You are given two 2D integer arrays nums1 and nums2.
// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.
// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:
// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.

// Link: https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/

//1st soln O(n)

var mergeArrays = function(nums1, nums2) {
    let map = {};

    let length = nums1.length > nums2.length ? nums1.length : nums2.length;

    for(let i = 0; i < length; i++) {
        if(nums1[i]) {
            if(map[nums1[i][0]]) {
                map[nums1[i][0]] += nums1[i][1];
            } else {
                map[nums1[i][0]] = nums1[i][1];
            }
        }

        if(nums2[i]) {
            if(map[nums2[i][0]]) {
                map[nums2[i][0]] += nums2[i][1];
            } else {
                map[nums2[i][0]] = nums2[i][1];
            }
        }
    }

    return Object.entries(map);
};