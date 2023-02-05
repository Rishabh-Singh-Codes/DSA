// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].

// Link: https://leetcode.com/problems/flipping-an-image/description/

//1st soln O(n^2)

var flipAndInvertImage = function(image) {
    let flipArr = [];

    for(let i = 0; i<image.length; i++) {
        flip = image[i].reverse();
        for(let j= 0; j<flip.length; j++) {
            if(flip[j] === 0) flip[j] = 1;
            else flip[j] = 0;
        }
        flipArr.push(flip);
    }

    return flipArr;
};