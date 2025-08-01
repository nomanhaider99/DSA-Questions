"use strict";
function search(nums, target) {
    let rotatedItems = [];
    let seriesNumber = nums[0];
    if (nums.length == 1) {
        return nums.includes(target) ? nums.indexOf(target) : -1;
    }
    else {
        for (let x = 1; x < nums.length; x++) {
            if (nums[x] === seriesNumber + 1) {
                seriesNumber += 1;
            }
            else {
                rotatedItems.push(nums[x]);
            }
        }
        if (rotatedItems.includes(target)) {
            let index = nums.indexOf(target);
            return index;
        }
        else {
            return -1;
        }
    }
}
;
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1], 1));
console.log(search([1, 3], 1));
