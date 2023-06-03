// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Link: https://leetcode.com/problems/roman-to-integer/description/

//1st soln O(n)

var romanToInt = function(s) {
    let res = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'I') {
            if(s[i+1] === 'V') {
                res += 4;
                continue;
            }

            if(s[i+1] === 'X') {
                res += 9;
                continue;
            }

            res+= 1;
        }

        if(s[i] === 'V') {
            if(s[i-1] === 'I') continue;
            else res += 5;
        }

        if(s[i] === 'X') {
            if(s[i-1] === 'I') continue;
            if(s[i+1] === 'L') {
                res += 40;
                continue;
            }
            if(s[i+1] === 'C') {
                res += 90;
                continue;
            }
            res += 10;
        }

        if(s[i] === 'L') {
            if(s[i-1] === 'X') continue;
            else res += 50;
        }

        if(s[i] === 'C') {
            if(s[i-1] === 'X') continue;
            if(s[i+1] === 'D') {
                res += 400;
                continue;
            }
            if(s[i+1] === 'M') {
                res += 900;
                continue;
            }
            res += 100;
        }

        if(s[i] === 'D') {
            if(s[i-1] === 'C') continue;
            else res += 500;
        }

        if(s[i] === 'M') {
            if(s[i-1] === 'C') continue;
            else res += 1000;
        }
    }

    return res;
};