// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.
// For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
// Each element of nums is in exactly one pair, and
// The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

// Link: https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/

//1st soln O(n)

var minPairSum = function(nums) {
    nums.sort((a, b) => b - a);

    let res = 0;
    let curr = 0;
    for(let i = 0; i < nums.length; i++) {
        curr = nums[i] + nums[nums.length - i - 1];
        if(curr > res) {
            res = curr;
        }
    }

    return res;
};