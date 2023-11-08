// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Link: https://leetcode.com/problems/most-common-word/description/

//1st soln O(n) w/ help

var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.toLowerCase().split(/\W+/);
    let map = {};

    for(let i = 0; i < words.length; i++) {
        if(!banned.includes(words[i])) {
            if(map[words[i]]) {
                map[words[i]] += 1;
            } else if(words[i].length) {
                map[words[i]] = 1;
            }
        }
    }

    let max = 0;
    let res = "";
    for(let word in map) {
        if(map[word] > max) {
            max = map[word];
            res = word;
        }
    }

    return res;
};