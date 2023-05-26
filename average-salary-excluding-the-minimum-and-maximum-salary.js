// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

// Link: https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/

//1st soln O(n)

var average = function(salary) {
    salary.sort((a, b) => a - b);

    salary.shift();
    salary.pop();
    
    let avg = 0;
    salary.map(el => avg += el);

    avg = avg/salary.length;

    return avg.toFixed(5);
};