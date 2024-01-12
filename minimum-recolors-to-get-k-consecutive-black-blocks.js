// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.
// You are also given an integer k, which is the desired number of consecutive black blocks.
// In one operation, you can recolor a white block such that it becomes a black block.
// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Link: https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/


//1st soln O(n^2)

var minimumRecolors = function(blocks, k) {
    let min = blocks.length;

    for(let i = 0; i <= blocks.length - k; i++) {
        let curr = 0;
        for(let j = i; j < i+k; j++){
            if(blocks[j] === "W") {
                curr++;
            }
        }

        min = Math.min(min, curr);
    }

    return min;
};