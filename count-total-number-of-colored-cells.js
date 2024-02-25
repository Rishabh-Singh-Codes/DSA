// There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer n, indicating that you must do the following routine for n minutes:
// At the first minute, color any arbitrary unit cell blue.
// Every minute thereafter, color blue every uncolored cell that touches a blue cell.
// Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.

// Link: https://leetcode.com/problems/count-total-number-of-colored-cells/description/

//1st soln O(n)

var coloredCells = function(n) {
    return Math.pow(n,2) + Math.pow(n-1, 2);
};