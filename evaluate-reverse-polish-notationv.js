// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/

//1st soln O(n) w/ help

var evalRPN = function(tokens) {
    let stack = [];

    const resolve = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a/b),
    }

    for(let token of tokens) {
        if(resolve[token]) {
            const second = stack.pop();
            const first = stack.pop();

            stack.push(resolve[token](first, second));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};