// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

// Link: https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/

//1st soln O(n^2)

var maxScore = function(s) {
    let max = 0;

    let leftSum = (left) => {
        let cnt = 0;
        for(let i = 0; i < left.length; i++) {
            if(left[i] === '0') cnt++;
        }

        return cnt;
    }

    let rightSum = (right) => {
        let cnt = 0;
        for(let i = 0; i < right.length; i++) {
            if(right[i] === '1') cnt++;
        }

        return cnt;
    }

    for(let i = 0; i < s.length-1; i++) {
        let left = s.slice(0, i+1);
        let right = s.slice(i+1);

        let sum = leftSum(left) + rightSum(right);

        if(sum > max) {
            max = sum;
        }
    }

    return max;
};