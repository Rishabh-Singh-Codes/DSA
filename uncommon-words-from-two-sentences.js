// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// Link: https://leetcode.com/problems/uncommon-words-from-two-sentences/description/

//1st soln O(n)

var uncommonFromSentences = function(s1, s2) {
    let w1 = s1.split(" ");
    let w2 = s2.split(" ");
    let maps = {};

    for(let i = 0; i<w1.length; i++ ) {
        if(maps[w1[i]]) maps[w1[i]] += 1;
        else maps[w1[i]] = 1;
    }

    for(let i = 0; i<w2.length; i++ ) {
        if(maps[w2[i]]) maps[w2[i]] += 1;
        else maps[w2[i]] = 1;
    }

    let res = Object.keys(maps).map((el) => {
        if(maps[el] === 1) return el;
    }).filter(el => el !== undefined);

    return res;
};