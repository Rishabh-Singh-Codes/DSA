// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Link: https://leetcode.com/problems/rotate-string/description/

//1st soln O(n)

var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;
    for(let i = 0; i<s.length; i++){
        s = s.slice(1, s.length)+s.charAt(0);
        if(s===goal) return true;
    }

    return false;
};