// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
// In one shift operation:
// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

// Link: https://leetcode.com/problems/shift-2d-grid/description/

//1st soln O(n)

var shiftGrid = function(grid, k) {
    let newArr = []
    grid.map(el => newArr.push(...el))

    for(let i = 0; i < k; i++) {
        let ele = newArr.pop(); 
        newArr.unshift(ele);
    }

    let size = grid[0].length;
    let res = [];
    let eleRes = [];

    for(let i = 0; i<newArr.length; i++){
        if(eleRes.length<size) {
            eleRes.push(newArr[i]);
            if(eleRes.length === size) res.push(eleRes);
        }
        else {
            eleRes = [];
            eleRes.push(newArr[i]);
            if(eleRes.length === size) res.push(eleRes);
        }
    }

    return res;

};