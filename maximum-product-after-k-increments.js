// You are given an array of non-negative integers nums and an integer k. In one operation, you may choose any element from nums and increment it by 1.
// Return the maximum product of nums after at most k operations. Since the answer may be very large, return it modulo 109 + 7. Note that you should maximize the product before taking the modulo. 

// Link: https://leetcode.com/problems/maximum-product-after-k-increments/description/

//1st soln O(nlogn + k) w/ help

var maximumProduct = function(nums, k) {
    nums.sort((a, b) => a - b);
    let curr = 0;

    for(let i = 0; i < k; i++) {
        if(nums[curr] > nums[curr+1] ?? Infinity) {
            curr++;
        } else {
            curr = 0;
        }

        nums[curr]++;
    }

    return nums.reduce((acc, curr) => {
        acc *= curr;
        return acc % (1e9+7);
    }, 1);
};