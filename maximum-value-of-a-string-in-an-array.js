// The value of an alphanumeric string can be defined as:
// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

// Link: https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/description/

//1st soln O(n) w/ help

var maximumValue = function(strs) {
    let max = 0;
    let curr = 0;
    for(let i = 0; i<strs.length; i++) {
        curr = isNaN(+strs[i]) ? strs[i].length : Number(strs[i]);
        max = Math.max(max, curr);
    }
    return max;
};


// 2nd soln

var maximumValue = function(strs) {
    let max = 0;

    strs.forEach((str) => {
        if(!isNaN(+str)) {
            max = Math.max(max, +str);
        } else {
            max = Math.max(max, str.length);
        }
    });

    return max;
};