// You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.
// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:
// 2 digits: A single block of length 2.
// 3 digits: A single block of length 3.
// 4 digits: Two blocks of length 2 each.
// The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.
// Return the phone number after formatting.

// Link: https://leetcode.com/problems/reformat-phone-number/description/

//1st soln O(n)

var reformatNumber = function(number) {
    let num = number.split(' ').join('').split('-').join("").split("");
    let res = "";
    if(num.length%3 === 0) {
        for(let i = 1; i <= num.length; i++) {
            res += num[i-1];
            if(i % 3 === 0 && i !== num.length) {
                res += "-"
            }
        }
    } else if(num.length%3 === 1) {
        for(let i = 1; i <= num.length - 4; i++) {
            res += num[i-1];
            if(i % 3 === 0 && i !== num.length) {
                res += "-"
            }
        }

        res += num.at(-4);
        res += num.at(-3);
        res += "-";
        res += num.at(-2);
        res += num.at(-1);
    } else {
        for(let i = 1; i <= num.length - 2; i++) {
            res += num[i-1];
            if(i % 3 === 0 && i !== num.length) {
                res += "-"
            }
        }

        res += num.at(-2);
        res += num.at(-1);
    }

    return res;
};