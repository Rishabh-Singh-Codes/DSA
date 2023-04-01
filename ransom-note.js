// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Link: https://leetcode.com/problems/ransom-note/description/

//1st soln O(n)

var canConstruct = function(ransomNote, magazine) {
    let map1 = {};
    let map2 = {};

    for(let i = 0; i<ransomNote.length; i++) {
        if(map1[ransomNote.charAt(i)]) map1[ransomNote.charAt(i)] += 1;
        else map1[ransomNote.charAt(i)] = 1;
    }

    for(let i = 0; i<magazine.length; i++) {
        if(map2[magazine.charAt(i)]) map2[magazine.charAt(i)] += 1;
        else map2[magazine.charAt(i)] = 1;
    }

    let ransomeChar = Object.keys(map1);

    for(let i = 0; i< ransomeChar.length; i++) {
        if(map1[ransomeChar[i]] > map2[ransomeChar[i]] || map2[ransomeChar[i]] === undefined) return false;
    }

    return true;

};