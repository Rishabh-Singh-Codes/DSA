// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

// Link: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

//1st soln O(n)

var countGoodSubstrings = function(s) {
    if(s.length < 3) return 0;

    let cnt = 0;

    for(let i = 0; i < s.length-2; i++) {
        if(s[i]===s[i+1] || s[i+1]===s[i+2] || s[i]===s[i+2]) continue;
        else cnt++;
    }

    return cnt;
};