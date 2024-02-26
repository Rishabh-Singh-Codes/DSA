// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.
// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.
// Return an array containing the index of the row, and the number of ones in it.

// Link: https://leetcode.com/problems/row-with-maximum-ones/description/

//1st soln O(n^2)

var rowAndMaximumOnes = function(mat) {
    let res = [0, 0];

    let countOne = (arr) => {
        let cnt = 0;
        arr.sort((a, b) => b - a);
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 1) cnt++;
        }

        return cnt;
    }

    for(let i = 0; i < mat.length; i++) {
        let count = countOne(mat[i]);

        if(count > res[1]) {
            res[0] = i;
            res[1] = count;
        }
    }

    return res;
};


//2nd soln O(n^2)

var rowAndMaximumOnes = function(mat) {
    let max = [Infinity, -Infinity];

    mat.forEach((row, idx) => {
        let curr = 0;
        row.forEach((el) => el === 1 ? curr++: null);
        if(curr > max[1]) {
            max = [idx, curr];
        }
    });

    return max;
};