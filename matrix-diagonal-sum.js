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