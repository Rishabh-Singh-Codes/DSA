// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

// Link: https://leetcode.com/problems/valid-perfect-square/description/

//1st soln O(n)

var isPerfectSquare = function(num) {
    let curr = 0;

    for(let i = 1; i <= num; i++) {
        curr = i * i;

        if(curr === num) {
            return true;
        } else if (curr > num) {
            return false;
        }
    }
};