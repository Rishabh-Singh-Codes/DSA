// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Link: https://leetcode.com/problems/second-largest-digit-in-a-string/description/

//1st soln O(n)

var secondHighest = function(s) {
    let arr = s.split("");
    let map = new Set;

    for(let i = 0; i<s.length; i++) {
        if(!isNaN(+arr[i])) map.add(+arr[i]);
    }

    let res = [...map];

    res.sort((a, b) => b-a);

    console.log(res)

    return res[1] > -1 ? res[1] : -1

};