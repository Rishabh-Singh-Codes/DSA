// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:
// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Link: https://leetcode.com/problems/left-and-right-sum-differences/description/

//1st soln O(n)

var leftRightDifference = function(nums) {
    let res = new Array(nums.length);

    for(let i = 0; i < nums.length; i++) {
        let lSum = 0;
        let rSum = 0;

        if(i > 0 && i < nums.length - 1) {
            lSum = nums.slice(0, i).reduce((acc, curr) => {
                acc += curr;
                return acc;
            }, 0);

            rSum = nums.slice(i+1).reduce((acc, curr) => {
                acc += curr;
                return acc;
            }, 0);
        }

        res[i] = Math.abs(lSum - rSum);

        if(i === 0) {
            res[0] = nums.slice(i+1).reduce((acc, curr) => {
                acc += curr;
                return acc;
            }, 0);
        }

        if(i === nums.length - 1) {
            res[nums.length - 1] = nums.slice(0, i).reduce((acc, curr) => {
                acc += curr;
                return acc;
            }, 0);
        }

    }

    return res;
};