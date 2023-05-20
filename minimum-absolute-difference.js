// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Link: https://leetcode.com/problems/minimum-absolute-difference/description/

//1st soln O(n)

var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b);

    if(arr.length === 2) return [[arr[0], arr[1]]];

    let diff = Number.MAX_SAFE_INTEGER;
    let res = [];


    for(let i = 1; i < arr.length; i++) {
      if(arr[i] - arr[i-1] < diff) {
        diff = arr[i] - arr[i-1];
        res = [];
        res.push([arr[i-1], arr[i]]);
      } else if (arr[i] - arr[i-1] === diff) res.push([arr[i-1], arr[i]]);
    }

    return res;
};