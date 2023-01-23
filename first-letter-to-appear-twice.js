// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Link: https://leetcode.com/problems/first-letter-to-appear-twice/description/

//1st soln O(n)

var repeatedCharacter = function(s) {
    let map = {};

    for(let i=0; i<s.length; i++){
        if(map[s.charAt(i)]) {
            map[s.charAt(i)] +=1;
            if(map[s.charAt(i)] === 2) return s.charAt(i);
        } else map[s.charAt(i)] = 1;
    }
};