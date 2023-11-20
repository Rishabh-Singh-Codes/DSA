// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

// Link: https://leetcode.com/problems/defuse-the-bomb/description/

//1st soln O(n^2)

var decrypt = function(code, k) {
    let n = code.length;

    if(k === 0) {
        return Array(n).fill(0);
    }

    let res = Array(n);

    if(k > 0) {
        for(let i = 0; i < n; i++) {
            let curr = 0;
            let sum = 0;
            for(let j = i !== n-1 ? i+1 : 0; j < n; j++) {
                if(curr === k) {
                    break;
                }
                sum += code[j];
                if(j === n-1) {
                    j = -1;
                }
                curr++;
            }
            res[i] = sum;
        }
    } else {
        k *= -1;
        for(let i = 0; i < n; i++) {
            let curr = 0;
            let sum = 0;
            for(let j = i !== 0 ? i-1 : n-1; j >= 0; j--) {
                if(curr === k) {
                    break;
                }
                sum += code[j];
                if(j === 0) {
                    j = n;
                }
                curr++;
            }
            res[i] = sum;
        }
    }

    return res;
};