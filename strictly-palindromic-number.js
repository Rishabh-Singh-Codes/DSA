// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.
// Given an integer n, return true if n is strictly palindromic and false otherwise.
// A string is palindromic if it reads the same forward and backward.

// Link: https://leetcode.com/problems/strictly-palindromic-number/description/

//1st soln O(n)

var isStrictlyPalindromic = function(n) {
    const isPalindrome = (str) => {
        for(let i = 0; i < str.length/2; i++) {
            if(str[i] !== str[str.length - i - 1]) {
                return false;
            }
        }

        return true;
    }

    for(let i = 2; i <= n - 2; i++) {
        if(isPalindrome(n.toString(i)) === false) {
            return false;
        }
    }

    return true;
};