// There is a class with m students and n exams. You are given a 0-indexed m x n integer matrix score, where each row represents one student and score[i][j] denotes the score the ith student got in the jth exam. The matrix score contains distinct integers only.
// You are also given an integer k. Sort the students (i.e., the rows of the matrix) by their scores in the kth (0-indexed) exam from the highest to the lowest.
// Return the matrix after sorting it.

// Link: https://leetcode.com/problems/sort-the-students-by-their-kth-score/

//1st soln O(n^2)

var sortTheStudents = function(score, k) {
    for(let i = 0; i< score.length; i++) {
        for(let j = i; j<score.length; j++) {
            if(score[i][k] < score[j][k]) {
                let temp = score[i];
                score[i] = score[j];
                score[j] = temp;
            }
        }
    }

    return score;
};

//2nd soln O(n log n) w/ help

var sortTheStudents = function(score, k) {
    return score.sort((a, b) => b[k] - a[k]);
};