// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

// Link: https://leetcode.com/problems/thousand-separator/description/

//1st soln O(n)

var thousandSeparator = function(n) {
    let res = "";
    let curr = 0;
    let m = String(n);
 
    for(let i = m.length-1; i >=0; i--) {
        if(curr === 3) {
            res += ".";
            curr = 0;
        } 

        res += m[i];
        curr++;
    }

    return res.split("").reverse().join("");
};