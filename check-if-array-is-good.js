// You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].
// base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].
// Return true if the given array is good, otherwise return false.
// Note: A permutation of integers represents an arrangement of these numbers.

// Link: https://leetcode.com/problems/check-if-array-is-good/description/

//1st soln O(n)

var isGood = function(nums) {
    if(nums.length === 1) {
        return false;
    }

    let max = nums.sort((a, b) => a - b).at(-1);

    if(nums.length > max + 1 || nums.length === max || max !== nums.length-1) {
        return false;
    }

    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] !== i+1) {
            return false;
        }
    }

    return true;
};