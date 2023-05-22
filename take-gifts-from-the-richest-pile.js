// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:
// Choose the pile with the maximum number of gifts.
// If there is more than one pile with the maximum number of gifts, choose any.
// Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
// Return the number of gifts remaining after k seconds.

// Link: https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/

//1st soln O(n)

var pickGifts = function(gifts, k) {
    for(let i = 0; i < k; i++) {
        gifts.sort((a, b) => b - a);
        gifts[0] = Math.floor(Math.sqrt(gifts[0]));
    }

    let sum = 0;

    for(let i = 0; i < gifts.length; i++) {
        sum += gifts[i];
    }

    return sum;
};