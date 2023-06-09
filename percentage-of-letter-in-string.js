// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Link: https://leetcode.com/problems/percentage-of-letter-in-string/description/

//1st soln O(n)

var percentageLetter = function(s, letter) {
    let cnt = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === letter) cnt++;
    }

    return Math.floor((cnt/s.length) * 100);
};