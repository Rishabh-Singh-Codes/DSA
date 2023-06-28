// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.
// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

// Link: https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/

//1st soln O(n)

var nearestValidPoint = function(x, y, points) {
    let validArr = points.reduce((acc, curr) => {
        if(curr[0] === x || curr[1] === y) acc.push(curr);
        return acc;
    }, []);

    let dist = Number.MAX_VALUE;

    let smallestDist = validArr.reduce((acc, curr) => {
        let diff = Math.abs(curr[0] - x) + Math.abs(curr[1] - y);
        if(diff < dist) {
            dist = diff;
            acc = []; 
            acc.push(curr);
        } else if(diff === dist) {
            acc.push(curr);
        }

        return acc;
    }, []);

    for(let i = 0; i < points.length; i++) {
        if(JSON.stringify(points[i]) === JSON.stringify(smallestDist[0])) return i;
    }

    return -1;
};