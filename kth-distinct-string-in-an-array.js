// A distinct string is a string that is present only once in an array.
// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".
// Note that the strings are considered in the order in which they appear in the array.

// Link: https://leetcode.com/problems/kth-distinct-string-in-an-array/description/

//1st soln O(n)

var kthDistinct = function(arr, k) {
    let map = {};
    for(let i = 0; i<arr.length; i++) {
        if(map[arr[i]]) map[arr[i]] += 1;
        else map[arr[i]] = 1;
    }

    let resArr = [];
    Object.keys(map).map((el) => {
        if(map[el] === 1) resArr.push(el)
    })

    return resArr[k-1] ? resArr[k-1] : "";
};