// You are given a 0-indexed array words consisting of distinct strings.
// The string words[i] can be paired with the string words[j] if:
// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.
// Note that each string can belong in at most one pair.

// Link: https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/

//1st soln O(n)

var maximumNumberOfStringPairs = function(words) {
    let map = {};

    for(let i = 0; i < words.length; i++) {
        if(map[words[i].split("").reverse().join("")]) {
            map[words[i].split("").reverse().join("")] += 1;
        } else {
            map[words[i]] = 1;
        }
    }

    let res = 0;

    Object.values(map).forEach(val => val >= 2 ? res++ : null);

    return res;
};