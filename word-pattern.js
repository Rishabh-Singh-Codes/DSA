// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Link: https://leetcode.com/problems/word-pattern/description/

//1st soln O(n)

var wordPattern = function(pattern, s) {
    let patternArr = pattern.split('');
    let stringArr = s.split(' ');

    if (patternArr.length !== stringArr.length) return false;

    let map = {};

    for(let i = 0; i < patternArr.length; i++){
        if(map[patternArr[i]]){
            if(map[patternArr[i]] == stringArr[i]) continue;
            else return false;
        } else {
            if (Object.values(map).includes(stringArr[i])) return false;
            map[patternArr[i]] = stringArr[i];
        }
    }

    return true;
};