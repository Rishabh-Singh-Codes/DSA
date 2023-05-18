// You are given a 0-indexed string array words.
// Two strings are similar if they consist of the same characters.
// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

// Link: https://leetcode.com/problems/count-pairs-of-similar-strings/description/

//1st soln O(n)

var similarPairs = function(words) {
    let map = {};
    let res = 0;

    for(let i = 0; i < words.length; i++) {
        let arr = Array.from(new Set(words[i].split("").sort()));
        if(map[arr]) map[arr] += 1;
        else map[arr] = 1;
    }

    for(let i = 0; i < Object.keys(map).length; i++) {
        if(map[Object.keys(map)[i]] === 2) res++;
        if(map[Object.keys(map)[i]] > 2) {
            let n = map[Object.keys(map)[i]];
            res += ((n*(n-1))/2);
        }
    }

    return res;
};