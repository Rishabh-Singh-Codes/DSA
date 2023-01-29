// You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.
// Return true if you can make arr equal to target or false otherwise.

// Link: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/

//1st soln O(n)

var canBeEqual = function(target, arr) {
    let map1 = {};
    let map2 = {};

    for(let i =0; i<target.length; i++) {
        if(map1[target[i]]) map1[target[i]]+=1;
        else map1[target[i]] = 1;
    }

    for(let i =0; i<arr.length; i++) {
        if(map2[arr[i]]) map2[arr[i]]+=1;
        else map2[arr[i]] = 1;
    }

    if (JSON.stringify(map1) === JSON.stringify(map2)) return true;
    else return false;
};