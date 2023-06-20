// You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.
// For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
// Return an integer array ans of size n where ans[i] is the width of the ith column.
// The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

// Link: https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/description/

//1st soln O(n^2)

var findColumnWidth = function(grid) {
    let res = new Array(grid[0].length).fill(0);

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            res[j] = Math.max(res[j], String(grid[i][j]).length);
        }
    }

    return res;
};