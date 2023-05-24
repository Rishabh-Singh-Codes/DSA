// There is a function signFunc(x) that returns:
// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.
// Return signFunc(product).

// Link: https://leetcode.com/problems/sign-of-the-product-of-an-array/description/

//1st soln O(n)

var arraySign = function(nums) {
    let neg = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) return 0;
        if(nums[i] < 0) neg++;
    }

    if(neg%2 === 0) return 1;
    else return -1;
};