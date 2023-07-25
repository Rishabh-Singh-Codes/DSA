// You are given a positive integer arrivalTime denoting the arrival time of a train in hours, and another positive integer delayedTime denoting the amount of delay in hours.
// Return the time when the train will arrive at the station.
// Note that the time in this problem is in 24-hours format.


// Link: https://leetcode.com/problems/calculate-delayed-arrival-time/description/

//1st soln O(n)

var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let sum = arrivalTime + delayedTime;

    if(sum >= 24) {
        return Math.abs(24 - sum);
    } else {
        return sum;
    }
};