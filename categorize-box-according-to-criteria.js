// Given four integers length, width, height, and mass, representing the dimensions and mass of a box, respectively, return a string representing the category of the box.
// The box is "Bulky" if:
// Any of the dimensions of the box is greater or equal to 104.
// Or, the volume of the box is greater or equal to 109.
// If the mass of the box is greater or equal to 100, it is "Heavy".
// If the box is both "Bulky" and "Heavy", then its category is "Both".
// If the box is neither "Bulky" nor "Heavy", then its category is "Neither".
// If the box is "Bulky" but not "Heavy", then its category is "Bulky".
// If the box is "Heavy" but not "Bulky", then its category is "Heavy".
// Note that the volume of the box is the product of its length, width and height.

// Link: https://leetcode.com/problems/categorize-box-according-to-criteria/description/

//1st soln O(n)

var categorizeBox = function(length, width, height, mass) {
    let vol = length * width * height;
    let bulky = false;
    let heavy = false;

    if(length >= 10000 ||  width >= 10000 || height >= 10000 || mass >= 10000 || vol >= 1000000000) bulky = true;

    if(mass >= 100) heavy = true;

    if(bulky === true && heavy === true) return "Both";
    if(bulky === false && heavy === false) return "Neither";
    if(bulky === true && heavy === false) return "Bulky";
    if(bulky === false && heavy === true) return "Heavy";

};