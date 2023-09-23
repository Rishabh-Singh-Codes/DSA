// Given an array of strings words and an integer k, return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Link: https://leetcode.com/problems/top-k-frequent-words/description/

//1st soln O(n) w/ help

var topKFrequent = function(words, k) {
    let map = {};

    for(let i = 0; i < words.length; i++) {
        if(map[words[i]]) {
            map[words[i]] += 1;
        } else {
            map[words[i]] = 1;
        }
    }

    let orderedArr = Object.entries(map).sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }

        if (a[1] === b[1]) {
            return a[0] > b[0] ? 1 : -1;
        }
        
    });

    let res = [];

    for(let i = 0; i < k; i++) {
        res.push(orderedArr[i][0]);
    }

    res.sort((a, b) => a - b);

    return res;

};