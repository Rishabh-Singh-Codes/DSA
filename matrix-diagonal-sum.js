// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 
// Link: https://leetcode.com/problems/matrix-diagonal-sum/description/

//1st soln O(n)

var diagonalSum = function(mat) {
    let len = mat.length;
    let sum = 0;
    if(len % 2 !== 0){    
        for(let i = 0; i<len; i++) {
            sum += parseInt(mat[i][i])+ (i !== Math.floor(len/2) ? parseInt(mat[i][(mat[i].length)-i-1]) : 0);
        }
    } else {
        for(let i = 0; i<len; i++) {
        sum += parseInt(mat[i][i])+ parseInt(mat[i][(mat[i].length)-i-1]);
        }
    }
    return sum;
};


//2nd soln O(n)

var diagonalSum = function(mat) {
    const len = mat.length;
    
    if(len === 1) {
        return mat[0][0];
    }

    let sum = 0;

    for(let i = 0; i < len; i++) {
        sum += (mat[i][i] + mat[i][len-i-1]);
    }

    if(len % 2 !== 0) {
        const idx = Math.floor(len/2);
        sum -= mat[idx][idx];
    }

    return sum;
};