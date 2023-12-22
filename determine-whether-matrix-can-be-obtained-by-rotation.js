// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

// Link: https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/description/

//1st soln O(n^2) w/ help

var findRotation = function(mat, target) {
    const rotateArr = (arr) => {
        let n = arr.length;
        for(let i = 0; i < n; i++) {
            for(let j = i; j < n; j++) {
                let temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp
            }
        }

        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n/2; j++) {
                let temp = arr[i][j];
                arr[i][j] = arr[i][n-j-1];
                arr[i][n-j-1] = temp;
            }
        }

        return arr;
    }

    for(let i = 0; i <= 3; i++) {
        if(JSON.stringify(rotateArr(mat)) === JSON.stringify(target)) {
            return true;
        }
    }

    return false;
};