// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

// Link: https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/

//1st soln O(n)

var totalMoney = function(n) {
    let total = 0;
    let curr = 1;
    let day = 1;
    let mon = 1;
    
    for(let i = 1; i <= n; i++) {
        total += curr;
        curr++;
        day++;
        if(day === 8) {
            curr = ++mon;
            day = 1;
        }
    }

    return total;
};