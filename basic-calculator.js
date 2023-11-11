// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Link: https://leetcode.com/problems/basic-calculator/description/

//1st soln O(n) w/ help

var calculate = function(s) {
    let sign = 1;
    let sum = 0;
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] >= "0" && s[i] <= "9") {
            let num = 0;

            while(s[i] >= "0" && s[i] <= "9"){
                num = (num * 10) + (s[i] - "0");
                i++;
            }

            sum += (num * sign);
            i--;
        } else if(s[i] === "+") {
            sign = 1;
        } else if(s[i] === "-") {
            sign = -1;
        } else if(s[i] === "(") {
            stack.push(sum);
            stack.push(sign);
            sum = 0;

            sign = 1
        } else if(s[i] === ")") {
            sum = stack.pop() * sum;
            sum += stack.pop();
        }
    }

    return sum;
};