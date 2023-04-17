// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is. The rank has the following rules:
// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Link: https://leetcode.com/problems/rank-transform-of-an-array/description/

//1st soln O(n)

var arrayRankTransform = function(arr) {
    if(arr.length < 1) return [];
    let newSet = new Set(arr);
    let newArr = Array.from(newSet).sort((a, b) => a-b);

    let res = [arr.length];

    for(let i = 0; i < arr.length; i++) {
        res[i] = newArr.indexOf(arr[i])+1;
    }

    return res;
};