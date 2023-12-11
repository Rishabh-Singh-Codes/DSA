// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Link: https://leetcode.com/problems/counter-ii/description/

//1st soln O(n)

var createCounter = function(init) {
    let curr = init;
    return {
        increment: function() {
            curr++
            return curr;
        },
        decrement: function() {
            curr--;
            return curr;
        },
        reset: function() {
            curr = init;
            return curr;
        }
    }
};