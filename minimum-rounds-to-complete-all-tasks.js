// You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.
// Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

// Link: https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/


//1st soln O(n) with some help

var minimumRounds = function(tasks) {
    let map = {}
    let count = 0;

    for(let i = 0;i<tasks.length;i++) {
        if(map[tasks[i]]){
            map[tasks[i]] += 1;
        } else map[tasks[i]] = 1;
    }

    for (freq in map) {
        if (map[freq] < 2) return -1;
        count += Math.ceil(map[freq]/3);
    }

    return count;
};