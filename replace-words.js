// In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. For example, when the root "an" is followed by the successor word "other", we can form a new word "another".
// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. If a successor can be replaced by more than one root, replace it with the root that has the shortest length.
// Return the sentence after the replacement.

// Link: https://leetcode.com/problems/replace-words/description/

//1st soln O(n^2)

var replaceWords = function(dictionary, sentence) {
    dictionary.sort();

    let words = sentence.split(" ");

    let res = [];

    for(let word of words) {
        let curr = word;
        for(let root of dictionary) {
            if(word.substring(0, root.length) === root) {
                curr = root;
                break;
            }
        }

        res.push(curr);
    }

    return res.join(" ");
};