// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Link: https://leetcode.com/problems/backspace-string-compare/description/

//1st soln O(n)

var backspaceCompare = function(s, t) {
    let str1 = '';
    let str2 = '';

    for(let i = 0; i< s.length; i++) {
        if(s.charAt(i) === '#') {
            if(str1 !== '') str1 = str1.slice(0, str1.length-1)
        } else str1 += s.charAt(i)
    }

    for(let i = 0; i< t.length; i++) {
        if(t.charAt(i) === '#') {
            if(str2 !== '') str2 =str2.slice(0, str2.length-1)
        } else str2 += t.charAt(i)
    }

    return str1 === str2;
};