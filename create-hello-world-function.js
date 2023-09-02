// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Link: https://leetcode.com/problems/create-hello-world-function/description/

//1st soln O(n)

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};