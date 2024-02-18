// There are n employees, each with a unique id from 0 to n - 1.
// You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:
// idi is the id of the employee that worked on the ith task, and
// leaveTimei is the time at which the employee finished the ith task. All the values leaveTimei are unique.
// Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.
// Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.

// Link: https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/description/

//1st soln O(nlogn)

var hardestWorker = function(n, logs) {
    let map = {};

    map[logs[0][1]] = [logs[0][0]];

    for(let i = 1; i < logs.length; i++) {
        if(map[logs[i][1] - logs[i-1][1]]) {
            map[logs[i][1] - logs[i-1][1]].push(logs[i][0]);
        } else {
            map[logs[i][1] - logs[i-1][1]] = [logs[i][0]];
        }
    }

    return map[Object.keys(map).at(-1)].sort((a, b) => a - b)[0];
};