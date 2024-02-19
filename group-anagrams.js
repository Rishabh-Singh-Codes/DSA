// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Link: https://leetcode.com/problems/group-anagrams/description/

//1st soln O(n)

var groupAnagrams = function(strs) {
    let map = new Map();

    for(let str of strs) {
        const sortedStr = str.split("").sort().join("");
        if(map.get(sortedStr)) {
            map.set(sortedStr, [...map.get(sortedStr), str]);
        } else {
            map.set(sortedStr, [str]);
        }
    }

    let res = [];

    for(const [_, val] of map) {
        res.push(val);
    }

    return res;
};

