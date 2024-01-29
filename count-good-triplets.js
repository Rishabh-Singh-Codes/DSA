// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.
// Return the number of good triplets.

// Link: https://leetcode.com/problems/count-good-triplets/description/

//1st soln O(n^3) w/ help

var countGoodTriplets = function(arr, a, b, c) {
    let res = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) > a) {
                continue;
            }

            for(let k = j+1; k < arr.length; k++) {
                if(Math.abs(arr[j] - arr[k]) > b) {
                    continue;
                }

                if(Math.abs(arr[k] - arr[i]) <= c) {
                    res++;
                }
            }
        }
    }

    return res;
};