// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.
// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// Link: https://leetcode.com/problems/robot-return-to-origin/description/

//1st soln O(n)

var judgeCircle = function(moves) {
    let pos = [0, 0];

    for(let i = 0; i < moves.length; i++) {
        if(moves[i] === 'U') pos[0] += 1;
        if(moves[i] === 'D') pos[0] -= 1;
        if(moves[i] === 'R') pos[1] += 1;
        if(moves[i] === 'L') pos[1] -= 1;
    }

    if(JSON.stringify(pos) === JSON.stringify([0, 0])) return true;
    else return false;

};