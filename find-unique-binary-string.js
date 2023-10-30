// Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

// Link: https://leetcode.com/problems/find-unique-binary-string/description/

//1st soln O(n) w/ help

var findDifferentBinaryString = function(nums) {
    let n = nums.length;

    for(let i = 0; i < Math.pow(2, n); i++) {
        let res = i.toString(2).padStart(n, "0");
        if(!nums.includes(res)){
            return res;
        }
    }

    return "";
};