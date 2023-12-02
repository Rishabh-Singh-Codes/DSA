// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
// Return any answer array that satisfies this condition.

// Link: https://leetcode.com/problems/sort-array-by-parity-ii/description/

//1st soln O(n)

var sortArrayByParityII = function(nums) {
    let odd = [];
    let even = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i]%2 === 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i]);
        }
    }

    let res = [];

    for(let i = 0; i < nums.length/2; i++) {
        res.push(even[i]);
        res.push(odd[i]);
    }

    return res;
};