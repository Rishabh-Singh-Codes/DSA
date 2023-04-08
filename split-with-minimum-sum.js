// Given a positive integer num, split it into two non-negative integers num1 and num2 such that:
// The concatenation of num1 and num2 is a permutation of num.
// In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
// num1 and num2 can contain leading zeros.
// Return the minimum possible sum of num1 and num2.
// Notes:
// It is guaranteed that num does not contain any leading zeros.
// The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.

// Link: https://leetcode.com/problems/split-with-minimum-sum/description/

//1st soln O(n)

var splitNum = function(num) {
    let n1 = "";
    let n2 = "";
    num = String(num).split("").sort((a, b) => +a - +b);
    for(let i = 1; i<=num.length; i++) {
        if(i%2!==0) n1+=num[i-1];
        else n2+=num[i-1];
    }
    
    return +n1+ +n2;
};