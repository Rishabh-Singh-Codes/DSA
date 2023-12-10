// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Link: https://leetcode.com/problems/to-be-or-not-to-be/description/

//1st soln O(n)

var expect = function(val) {
    let toBe = function(val2) {
        if(val === val2) {
            return true;
        }

        throw new Error("Not Equal");
    }

    let notToBe = function(val2) {
        if(val !== val2) {
            return true;
        }

        throw new Error("Equal");
    }

    return {
        toBe, notToBe
    }
};