// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Link: https://leetcode.com/problems/compact-object/description/

//1st soln O(n) w/ help

var compactObject = function(obj) {
    if(obj === null) {
        return null;
    }

    if(Array.isArray(obj)) {
        return obj.filter(k => Boolean(k)).map(j => compactObject(j))
    }

    if(typeof obj !== "object") {
        return obj;
    }

    const compacted = {};

    for(const key in obj) {
        let val = compactObject(obj[key]);
        if(val) {
            compacted[key] = val;
        }
    }

    return compacted;
};