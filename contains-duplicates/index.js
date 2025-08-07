"use strict";
function containsDuplicate(nums) {
    let result = false;
    nums.sort((a, b) => a - b);
    let repeated = nums[0];
    for (let x = 1; x < nums.length; x++) {
        if (nums[x] == repeated) {
            result = true;
            break;
        }
        else {
            repeated = nums[x];
        }
    }
    return result;
}
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
// delete every element each time and check if that exists
// if yes return true else return false
