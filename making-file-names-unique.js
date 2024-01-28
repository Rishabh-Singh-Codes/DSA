// Given an array of strings names of size n. You will create n folders in your file system such that, at the ith minute, you will create a folder with the name names[i].
// Since two files cannot have the same name, if you enter a folder name that was previously used, the system will have a suffix addition to its name in the form of (k), where, k is the smallest positive integer such that the obtained name remains unique.
// Return an array of strings of length n where ans[i] is the actual name the system will assign to the ith folder when you create it.

// Link: https://leetcode.com/problems/making-file-names-unique/description/

//1st soln O(n) w/ help

var getFolderNames = function(names) {
    let map = new Map();

    for(const name of names) {
        if(!map.has(name)) {
            map.set(name, 1);
        } else {
            let cnt = map.get(name);
            let newName = `${name}(${cnt})`;

            while(map.has(newName)) {
                cnt++;
                newName = `${name}(${cnt})`;
            }

            map.set(name, cnt+1);
            map.set(newName, 1);
        }
    }

    return [...map.keys()];
};