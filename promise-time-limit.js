// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

// Link: https://leetcode.com/problems/promise-time-limit/description/

//1st soln O(1) w/ help

var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((res, rej) => {
            const timer = setTimeout(() => {
                rej("Time Limit Exceeded")
            }, t);

            fn(...args)
            .then(res, rej)
            .finally(() => clearTimeout(timer));
        })
    }
};