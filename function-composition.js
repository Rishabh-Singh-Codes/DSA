// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Link: https://leetcode.com/problems/function-composition/description/

//1st soln O(n) w/ help

var compose = function(functions) {
    if(functions.length === 0) {
        return function(x) {
            return x;
        }
    }

    return function(x) {
        let res = functions[functions.length - 1](x);

        for(let i = functions.length - 2; i >= 0; i--) {
            res = functions[i](res);
        }

        return res;
    }
};