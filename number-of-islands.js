// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Link: https://leetcode.com/problems/number-of-islands/description/

//1st soln O(n^2) w/ help : https://www.youtube.com/watch?v=r260LwU67Uo

var numIslands = function(grid) {
    let numIslands = 0;

    for(let rowIdx in grid) {
        for(colIdx in grid[rowIdx]) {
            if(grid[rowIdx][colIdx] === "1") {
                numIslands++;
                teraform(parseInt(rowIdx), parseInt(colIdx), grid);
            }
        }
    }

    return numIslands;
};

const teraform = (rowIdx, colIdx, grid) => {
    if(grid[rowIdx] === undefined || grid[rowIdx][colIdx] === undefined || grid[rowIdx][colIdx] === "0") return;

    grid[rowIdx][colIdx] = "0";

    teraform(rowIdx+1, colIdx, grid);
    teraform(rowIdx-1, colIdx, grid);
    teraform(rowIdx, colIdx+1, grid);
    teraform(rowIdx, colIdx-1, grid);
}