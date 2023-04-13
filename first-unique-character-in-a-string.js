// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Link: https://leetcode.com/problems/first-unique-character-in-a-string/description/

//1st soln O(n)

var firstUniqChar = function(s) {
    let map = {};
    let chars = s.split("");
    for(let i = 0; i<chars.length; i++) {
        if(map[chars[i]]) map[chars[i]] += 1;
        else map[chars[i]] = 1;
    }

    for(let i = 0; i<chars.length; i++) {
        if(map[chars[i]] === 1) return i;
    }

    return -1;
};