// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Link: https://leetcode.com/problems/valid-anagram/description/

//1st soln O(n)

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let map1 = {};
    let map2 = {};

    for(let i = 0; i < s.length; i++) {
        if(map1[s[i]]) map1[s[i]] += 1;
        else map1[s[i]] = 1;
    }

    for(let i = 0; i < t.length; i++) {
        if(map2[t[i]]) map2[t[i]] += 1;
        else map2[t[i]] = 1;
    }

    for(let i = 0; i < s.length; i++) {
        if(map1[s[i]] !== map2[s[i]]) return false;
    }

    return true;
};