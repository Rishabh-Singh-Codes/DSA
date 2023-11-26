// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer n, return its complement.

// Link: https://leetcode.com/problems/complement-of-base-10-integer/description/

//1st soln O(n)

var bitwiseComplement = function(n) {
    return parseInt(n.toString(2)
    .split("")
    .map(el => {
        if(el === "1") return "0";
        else return "1";
    })
    .join(""), 2);
};