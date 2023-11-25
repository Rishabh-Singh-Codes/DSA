// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Link: https://leetcode.com/problems/shortest-distance-to-a-character/description/

//1st soln O(n^2)

var shortestToChar = function(s, c) {
    let res = Array(s.length).fill(Number.MAX_SAFE_INTEGER);

    for(let i = 0; i < s.length; i++) {
        if(s[i] !== c) {
            for(let j = 0; j < s.length; j++) {
                if(s[j] === c) {
                    res[i] = Math.min(Math.abs(i-j), res[i]);
                }
            }
        } else {
            res[i] = 0;
        }
    }


    return res;
};