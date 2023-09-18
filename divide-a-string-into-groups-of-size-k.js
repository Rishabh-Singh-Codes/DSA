// A string s can be partitioned into groups of size k using the following procedure:
// The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
// For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.
// Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.

// Link: https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/description/

//1st soln O(n)

var divideString = function(s, k, fill) {
    let res = [];

    let curr = "";
    for(let i = 0; i < s.length; i++) {
        if(curr.length < k) {
            curr += s[i];
        }

        if(i === s.length - 1) {
            res.push(curr);
            break;
        }

        if(curr.length === k) {
            res.push(curr);
            curr = "";
        }
    }

    if(res.at(-1).length < k) {
        while(res.at(-1).length < k) {
            res[res.length-1] = res[res.length-1] + fill;
        }
    }

    return res;
};