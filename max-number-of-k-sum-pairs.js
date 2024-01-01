// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

// Link: https://leetcode.com/problems/max-number-of-k-sum-pairs/description/

//1st soln O(n) w/ help

var maxOperations = function(nums, k) {
    let res = 0;
    let map = new Map();

    for(let i = 0 ; i < nums.length; i++) {
        let diff = k - nums[i];

        if(!map.has(diff)) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            continue;
        }

        map.set(diff, map.get(diff) - 1);

        if(!map.get(diff)) {
            map.delete(diff);
        }

        res++;
    }

    return res;
};