"use strict";
function majorityElement(nums) {
    nums.sort((a, b) => a - b);
    let obj = {};
    for (let num of nums) {
        if (num in obj) {
            obj[num] += 1;
        }
        else {
            obj[num] = 1;
        }
    }
    let highest = -Infinity;
    let highestOrdered = [];
    for (let element in obj) {
        if (obj[element] >= highest) {
            highest = obj[element];
        }
    }
    highestOrdered.sort((a, b) => b - a);
    console.log("object: ", obj);
    return highest;
}
;
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([-1, 1, 1, 1, 2, 1]));
