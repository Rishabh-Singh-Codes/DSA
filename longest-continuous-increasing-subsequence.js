// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

// Link: https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

//1st soln O(n)

var findLengthOfLCIS = function(nums) {
    let max = 1;
    let curr = 1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i+1] > nums[i]) {
            curr++;
        } else {
            max = Math.max(max, curr);
            curr = 1;
        }
    }

    return max;
};