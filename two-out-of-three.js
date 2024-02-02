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

// 2nd soln O(n)

var twoOutOfThree = function(nums1, nums2, nums3) {
    const arr1 = Array.from(new Set(nums1));
    const arr2 = Array.from(new Set(nums2));
    const arr3 = Array.from(new Set(nums3));

    let len;

    if(arr1.length > arr2.length) {
        arr1.length > arr3.length ? len = arr1.length : len = arr3.length;
    } else {
        arr2.length > arr3.length ? len = arr2.length : len = arr3.length;
    }

    let map = new Map();

    for(let i = 0; i < len; i++) {
        if(arr1[i] !== undefined) {
            map.set(arr1[i], ((map.get(arr1[i]) || 0) + 1));
        }

        if(arr2[i] !== undefined) {
            map.set(arr2[i], (map.get(arr2[i]) || 0) + 1);
        }

        if(arr3[i] !== undefined) {
            map.set(arr3[i], (map.get(arr3[i]) || 0) + 1);
        }
    }

    let res = [];

    for(let [key, val] of map) {
        if(val >= 2) {
            res.push(key);
        }
    }

    return res;
};