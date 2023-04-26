// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

// Link: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/

//1st soln O(n)

var generateTheString = function(n) {
    if(n%2 === 0) {
        let arr = new Array(n-1).fill("a");
        return arr.join("")+"b";
    } else {
        let arr = new Array(n).fill("a");
        return arr.join("");
    }
};