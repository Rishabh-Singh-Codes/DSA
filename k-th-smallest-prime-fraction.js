// You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.
// For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
// Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

// Link: https://leetcode.com/problems/k-th-smallest-prime-fraction/description/

//1st soln O(n^2) w/ help

var kthSmallestPrimeFraction = function(arr, k) {
    let res = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            res.push([ (arr[i]/arr[j]), arr[i], arr[j] ]);
        }
    }

    res.sort((a, b) => a[0] - b[0]);

    return [res[k-1][1], res[k-1][2]];
};