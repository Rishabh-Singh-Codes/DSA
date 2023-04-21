// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Link: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/description/

//1st soln O(n)

var sumZero = function(n) {
    if(n===1) return [0];

    let res = [];

    for(let i = 1; i <= n/2; i++) {
        res.push(i);
        res.push(-i);
    } 

    if(n%2!==0) res.push(0);

    return res;
};