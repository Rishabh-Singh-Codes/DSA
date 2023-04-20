// You are given a 0-indexed array of string words and two integers left and right.
// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

// Link: https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/description/

//1st soln O(n)

var vowelStrings = function(words, left, right) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let res = 0;
    for(let i = left; i <= right; i++){
        if(vowels.includes(words[i][0]) && vowels.includes(words[i].at(-1))) res++;
    }

    return res;
};