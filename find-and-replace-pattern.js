// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

// Link: https://leetcode.com/problems/find-and-replace-pattern/description/

//1st soln O(n)

var findAndReplacePattern = function(words, pattern) {
    const getPattern = (word) => {
        let map = {};
        let str = "";
        for(let i = 0; i < word.length; i++) {
            if(map[word[i]]) {
                str += map[word[i]];
            } else {
                map[word[i]] = Number(str) + 1 + "-";
                str += Object.keys(map).length;
            }
        }

        return str;
    }

    let patt = getPattern(pattern);
    let res = [];

    for(let i = 0; i < words.length; i++) {
        let currPatt = getPattern(words[i]);
        if(patt === currPatt) {
            res.push(words[i]);
        }
    }

    return res;
};