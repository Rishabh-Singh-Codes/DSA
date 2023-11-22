// Given an m x n binary matrix mat, return the number of special positions in mat.
// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

// Link: https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/

//1st soln O(n^2) w/ help

var numSpecial = function(mat) {
    let res = 0;

    const validRow = (idx) => {
        let sum = mat[idx].reduce((acc, curr) => {
            acc += curr;

            return acc;
        }, 0);

        if(sum === 1) {
            return true;
        }

        return false;
    }

    const validCol = (idx) => {
        let sum = mat.reduce((acc, curr) => {
            acc += curr[idx];

            return acc;
        }, 0);

        if(sum === 1) {
            return true;
        }

        return false;
    }

    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 1 && validRow(i) && validCol(j)) {
                res++;
            }
        }
    }

    return res;
};