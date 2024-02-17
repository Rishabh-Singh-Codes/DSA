// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.
// Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).
// In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.
// Return true if s is a well-spaced string, otherwise return false.

// Link: https://leetcode.com/problems/check-distances-between-same-letters/description/

//1st soln O(n)

var checkDistances = function(s, distance) {
    let map = {};

    for(let i = 0; i < s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1;
            let diff = s.indexOf(s[i], i+1) - i - 1;
            let idx = s[i].charCodeAt(0) - 97;
            if(distance[idx] !== diff) {
                return false;
            }
        }
    }

    return true;
};