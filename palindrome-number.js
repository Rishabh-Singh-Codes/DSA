// Given an integer x, return true if x is a palindrome, and false otherwise.

// Link: https://leetcode.com/problems/palindrome-number/description/

//1st soln O(n)

var isPalindrome = function(x) {
    let str = String(x);
    let n = str.length;

    for(let i = 0; i < n; i++) {
        if(str[i] !== str[n-i-1]){
            return false;
        }
    }

    return true;
};