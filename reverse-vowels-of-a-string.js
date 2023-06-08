// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Link: https://leetcode.com/problems/reverse-vowels-of-a-string/description/

//1st soln O(n)

var reverseVowels = function(s) {
    let vowels = s.split("").filter(el => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u' || el === 'A' || el === 'E' || el === 'I' || el === 'O' || el === 'U').reverse();

    let curr = 0;
    for(let i = 0; i < s.length; i++) {
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(s[i])) {
            s = s.slice(0,i) + vowels[curr] + s.slice(i+1);
            curr++;
        }
    }

    return s;
};