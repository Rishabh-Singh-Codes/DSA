// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

// Link: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

//1st soln O(n) TLE

var replaceElements = function(arr) {
    let res = [];
    for(let i = 0; i<arr.length-1; i++) {
        rightArr = arr.slice(i+1).sort((a, b) => b-a);
        res.push(rightArr[0]);
    }
    res.push(-1);

    return res;
};