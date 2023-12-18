// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.

// Link: https://leetcode.com/problems/chunk-array/description/

//1st soln O(n)

var chunk = function(arr, size) {
    let res = [];

    let curr = [];
    let cnt = 0;

    for(let i = 0; i < arr.length; i++) {
        curr.push(arr[i]);
        cnt++;
        if(cnt === size) {
            res.push(curr);
            cnt = 0;
            curr = [];
        } else if(i === arr.length -1) {
            res.push(curr);
        }
    }

    return res;
};