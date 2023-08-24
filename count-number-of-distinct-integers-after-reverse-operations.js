// You are given an array nums consisting of positive integers.
// You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.
// Return the number of distinct integers in the final array.

// Link: https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/description/

//1st soln O(n)

var countDistinctIntegers = function(nums) {
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        let rev = Number(String(nums[i]).split("").reverse("").join(""));
        nums.push(rev);
    }

    let set1 = new Set(nums);

    return [...set1].length;
};