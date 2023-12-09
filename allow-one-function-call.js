// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

// Link: https://leetcode.com/problems/allow-one-function-call/description/

//1st soln O(1) w/ help

var once = function(fn) {
    let isCalled = false;

    return function(...args) {
        if(!isCalled) {
            isCalled = true;
            return fn(...args);
        } else {
            return undefined;
        }
    }
};