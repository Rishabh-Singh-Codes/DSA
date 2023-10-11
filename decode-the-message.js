// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:
// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.


// Link: https://leetcode.com/problems/decode-the-message/description/

//1st soln O(n) w/ help

var decodeMessage = function(key, message) {
    key = Array.from(new Set(key.split(" ").join("")));
    let map = {};
    const alpha = "abcdefghijklmnopqrstuvwxyz";

    for(let i = 0; i < alpha.length; i++) {
        map[key[i]] = alpha[i];
    }

    let res = "";

    for(chr of message) {
        res += map[chr] || " ";
    }

    return res;
};