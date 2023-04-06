// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Link: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

//1st soln O(n)

var countNegatives = function(grid) {
    let cnt = 0;

    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++) {
            if(grid[i][j] < 0) cnt++;
        }
    }

    return cnt;
};