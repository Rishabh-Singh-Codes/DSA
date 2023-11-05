// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Link: https://leetcode.com/problems/min-cost-climbing-stairs/description/

//1st soln O(n) w/ help

var minCostClimbingStairs = function(cost) {
    let n = cost.length;

    for(let i = 2; i < n; i++) {
        cost[i] = Math.min(cost[i-1], cost[i-2]) + cost[i];
    }

    return Math.min(cost[n-1], cost[n-2]);
};