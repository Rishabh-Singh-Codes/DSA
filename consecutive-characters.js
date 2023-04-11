// The power of the string is the maximum length of a non-empty substring that contains only one unique character.
// Given a string s, return the power of s.

// Link: https://leetcode.com/problems/consecutive-characters/description/

//1st soln O(n)

var maxPower = function(s) {
    if(s.length === 1) return 1;

    let max = 1;
    let currMax = 1;

    for(let i = 1; i<s.length; i++) {
        if(s.charAt(i) === s.charAt(i-1)) currMax++;
        else {
            max = currMax > max ? currMax : max;
            currMax = 1;
            continue;
        }
    }

    max = currMax > max ? currMax : max;

    return max;


};