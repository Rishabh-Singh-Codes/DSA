// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
// Return the maximum total number of units that can be put on the truck.

// Link: https://leetcode.com/problems/maximum-units-on-a-truck/description/

//1st soln O(n)

var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let units = 0;
    let currNum = 0;

    for(let i = 0; i < boxTypes.length; i++) {
        if(truckSize - currNum - boxTypes[i][0] < 0) {
            units += ((truckSize - currNum) * boxTypes[i][1]);
            break;
        } else {
            units += boxTypes[i][0] * boxTypes[i][1];
            currNum += boxTypes[i][0];
        }
    }

    return units;
};