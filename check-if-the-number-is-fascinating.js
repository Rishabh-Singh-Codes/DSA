// You are given an integer n that consists of exactly 3 digits.
// We call the number n fascinating if, after the following modification, the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:
// Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.
// Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.

// Link: https://leetcode.com/problems/check-if-the-number-is-fascinating/description/

//1st soln O(n)

var isFascinating = function(n) {
    if(String(n).indexOf("0") > -1) return false; 

    n = String(n) + (2*n) + (3*n);

    if(n.length > 9) return false;

    n = n.split("").sort();

    for(let i = 1; i <=9; i++){
        console.log(n[i-1], i)
        if(n[i-1] !== String(i)) return false;
    }

    return true;
};