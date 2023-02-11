// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

// Link: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

//1st soln O(n)

var firstPalindrome = function(words) {
    let palindrome = (str) => {
        console.log(str, Math.floor(str.length/2));
        for(let i = 0; i<Math.floor(str.length/2); i++){
            if(str.charAt(i) !== str.charAt(str.length-i-1)) return false;
        } 

        return true;
    }

    for(let i = 0; i< words.length; i++) {
        if(palindrome(words[i])) return words[i];
    }

    return "";
};

//2nd soln O(n)

var firstPalindrome = function(words) {
    for(let word of words) {
        if(word === word.split("").reverse().join("")) return word;
    }

    return "";
};