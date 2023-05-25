// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:
// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.

// Link: https://leetcode.com/problems/sort-even-and-odd-indices-independently/description/

//1st soln O(n)

var sortEvenOdd = function(nums) {
    if(nums.length <= 2) return nums;

    let odd = [];
    let even = [];

    for(let i = 0; i < nums.length; i++) {
        if(i%2 === 0) even.push(nums[i]);
        else odd.push(nums[i]);
    }

    odd.sort((a, b) => b - a);
    even.sort((a, b) => a - b);

    let len = odd.length > even.length ? odd.length : even.length;
    let res = [];

    for(let j = 0; j < len; j++) {
        even[j] && res.push(even[j]);
        odd[j] && res.push(odd[j]);
    }

    return res;
};