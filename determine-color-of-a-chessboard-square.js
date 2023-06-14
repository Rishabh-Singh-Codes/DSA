// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
// Return true if the square is white, and false if the square is black.
// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

// Link: https://leetcode.com/problems/determine-color-of-a-chessboard-square/description/

//1st soln O(n)

var squareIsWhite = function(coordinates) {
    let sum = (coordinates.charCodeAt(0) - "a".charCodeAt(0)) + (+coordinates[1] - 1);

    if(sum % 2 === 0) {
        return false;
    } else {
        return true;
    }
};