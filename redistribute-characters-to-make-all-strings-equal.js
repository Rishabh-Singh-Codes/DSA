// You are given an array of strings words (0-indexed).
// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
// Return true if you can make every string in words equal using any number of operations, and false otherwise.

// Link: https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/

//1st soln O(n^2) w/ help

var makeEqual = function(words) {
    let map = {};

    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(map[words[i][j]]) {
                map[words[i][j]] += 1;
            } else {
                map[words[i][j]] = 1;
            }
        }
    }

    for(let char in map) {
        if(map[char] % words.length !== 0) {

            return false;
        }
    }

    return true;
};