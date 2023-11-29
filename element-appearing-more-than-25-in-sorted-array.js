// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

// Link: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/

//1st soln O(n)

var findSpecialInteger = function(arr) {
    if(arr.length === 1) {
        return arr[0];
    }

    let limit = arr.length/4;

    let map = {};

    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) {
            map[arr[i]] += 1;
            if(map[arr[i]] > limit) {
                return arr[i];
            }
        } else {
            map[arr[i]] = 1;
        }
    }
};