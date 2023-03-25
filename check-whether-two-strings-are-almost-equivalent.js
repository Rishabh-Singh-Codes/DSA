// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.
// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.
// The frequency of a letter x is the number of times it occurs in the string.

// Link: https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/

//1st soln O(n)

var checkAlmostEquivalent = function(word1, word2) {
    let map1 = {};
    let map2 = {};

    for(let i = 0; i < word1.length; i++) {
        if(map1[word1[i]]) map1[word1[i]] += 1;
        else map1[word1[i]] = 1;
    }

    for(let i = 0; i < word2.length; i++) {
        if(map2[word2[i]]) map2[word2[i]] += 1;
        else map2[word2[i]] = 1;
    }

    let keys1 = Object.keys(map1)

    for(let i = 0; i < keys1.length; i++) {
        if(map2[keys1[i]]) {
            if(Math.abs(map1[keys1[i]]-map2[keys1[i]]) > 3) return false;
        } else if(map1[keys1[i]] > 3) return false;
    }

    let keys2 = Object.keys(map2)

    for(let i = 0; i < keys2.length; i++) {
        if(map1[keys2[i]]) {
            if(Math.abs(map1[keys2[i]]-map2[keys2[i]]) > 3) return false;
        } else if(map2[keys2[i]] > 3) return false;
    }

    return true;
};