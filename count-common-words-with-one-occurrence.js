// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

// Link: https://leetcode.com/problems/count-common-words-with-one-occurrence/description/

//1st soln O(n)

var countWords = function(words1, words2) {
    let map1 = {};
    let map2 = {};

    for(let i = 0; i < words1.length; i++) {
        if(map1[words1[i]]) map1[words1[i]] += 1;
        else map1[words1[i]] = 1;
    }

    for(let i = 0; i < words2.length; i++) {
        if(map2[words2[i]]) map2[words2[i]] += 1;
        else map2[words2[i]] = 1;
    }

    let cnt = 0;

    Object.keys(map1).map((el) => {
        if(map1[el] === 1 && map2[el] === 1) cnt++;
    })

    return cnt;
};