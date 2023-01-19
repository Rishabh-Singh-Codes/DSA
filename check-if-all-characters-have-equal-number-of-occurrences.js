// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Link: https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/

//1st soln O(n)

var areOccurrencesEqual = function(s) {
    let map = {};

    for(let i = 0; i<s.length; i++){
        if(map[s.charAt(i)]) map[s.charAt(i)]+=1
        else map[s.charAt(i)]=1;
    }

    let vals = Object.values(map);

    for(let i = 1; i<vals.length; i++){
        if(vals[i] != vals[i-1]) return false;
    }

    return true;
};