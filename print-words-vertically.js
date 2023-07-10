// Given a string s. Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
// Each word would be put on only one column and that in one column there will be only one word.

// Link: https://leetcode.com/problems/print-words-vertically/description/

//1st soln O(n^2)

var printVertically = function(s) {
    let arr = s.split(" ");
    let len = s.split(" ").sort((a, b) => b.length - a.length)[0].length;

    let res = [];
    for(let i = 0; i < len; i++) {
        let word = "";
        for(let j = 0; j < arr.length; j++) {
            if(arr[j][i]) {
                word += arr[j][i];
            } else {
                word += " ";
            }
        }

        res.push(word.trimEnd());
    }

    return res;
};