// You are given a positive integer n.
// Let even denote the number of even indices in the binary representation of n (0-indexed) with value 1.
// Let odd denote the number of odd indices in the binary representation of n (0-indexed) with value 1.
// Return an integer array answer where answer = [even, odd].

// Link: https://leetcode.com/problems/number-of-even-and-odd-bits/description/

//1st soln O(n)

var evenOddBit = function(n) {
    let binaryRep = n.toString(2).split("").reverse().join("");

    let res = [0, 0];

    for(let i = 0; i < binaryRep.length; i++) {
        if(binaryRep[i] === '1') {
            if(i=== 0 || i%2 === 0) {
                res[0]++;
            } else {
                res[1]++;
            }
        }
    }

    return res;
};