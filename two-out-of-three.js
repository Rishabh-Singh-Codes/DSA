// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

// Link: https://leetcode.com/problems/two-out-of-three/description/

//1st soln O(n)

var twoOutOfThree = function(nums1, nums2, nums3) {
    let map = {};

    let arr1 = [... new Set(nums1)];
    let arr2 = [... new Set(nums2)];
    let arr3 = [... new Set(nums3)];

    for(let i=0;i <arr1.length; i++) {
        if(map[arr1[i]]) continue;
        else map[arr1[i]] = 1;
    }

    for(let i=0;i <arr2.length; i++) {
        if(map[arr2[i]]) {
            if (map[arr2[i]]>1) continue;
            else map[arr2[i]] +=1;
        }
        else map[arr2[i]] = 1;
    }

    for(let i=0;i <arr3.length; i++) {
        if(map[arr3[i]]) {
            if (map[arr3[i]]>2) continue;
            map[arr3[i]] +=1;
        }
        else map[arr3[i]] = 1;
    }

    let keys = Object.keys(map);
    let res = [];

    for(let i = 0; i < keys.length; i++) {
        if(map[keys[i]] >= 2) res.push(keys[i]);
    }

    return res;
};