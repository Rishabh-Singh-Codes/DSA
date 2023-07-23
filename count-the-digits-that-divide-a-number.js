// Given an integer num, return the number of digits in num that divide num.
// An integer val divides nums if nums % val == 0.

// Link: https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

//1st soln O(n)

var countDigits = function(num) {
    let nums = String(num).split("");
    let cnt = 0;
    for(let n of nums) {
        if(num%n === 0) {
            cnt++;
        }
    }

    return cnt;
};