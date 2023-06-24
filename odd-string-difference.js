// You are given an array of equal-length strings words. Assume that the length of each string is n.
// Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.
// For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
// All the strings in words have the same difference integer array, except one. You should find that string.
// Return the string in words that has different difference integer array.


// Link: https://leetcode.com/problems/odd-string-difference/description/

//1st soln O(n^2)

var oddString = function(words) {
    let map = {};

    for(let i = 0; i < words.length; i++) {
        let curr = [];
        for(let j = 1; j < words[i].length; j++) {
            curr.push(((words[i][j].charCodeAt(0) -97) - (words[i][j-1].charCodeAt(0) -97)));
        }

        if(map[String(curr)]) {
            map[String(curr)][0] += 1;
            map[String(curr)][0][1] = words[i];
        }
        else map[String(curr)] = [1, words[i]]; 
    }

    let arrs = Object.keys(map);

    for(let i = 0; i < arrs.length; i++) {
        if(map[arrs[i]][0] === 1) return map[arrs[i]][1];
    }
};