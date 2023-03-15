// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Return the largest lucky integer in the array. If there is no lucky integer return -1.

// Link: https://leetcode.com/problems/find-lucky-integer-in-an-array/description/

//1st soln O(n)

var findLucky = function(arr) {
    let map = {};
    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) map[arr[i]] += 1;
        else map[arr[i]] = 1;
    }

    let max = -1;
    let keys = Object.keys(map);

    for(let i = 0; i < keys.length; i++) {
        if(keys[i] == map[keys[i]]) {
            if(keys[i] > max) max = +keys[i];
        }
    }

    return max;
};