// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

// Link: https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/description/

//1st soln O(n)

var checkString = function(s) {
    let trigger = false;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'b') trigger = true;
        if (trigger && s[i] === 'a') return false; 
    }

    return true;
};