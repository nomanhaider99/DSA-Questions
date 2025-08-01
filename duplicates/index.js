"use strict";
function containsDuplicate(nums) {
    for (let x = 0; x < nums.length; x++) {
        let seen = new Set();
        for (let num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
    }
    return false;
}
;
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([2, 14, 18, 22, 22]));
console.log(containsDuplicate([274, -735, -911, 80, 454, -511, 922, -775, 985, -669, -463, -896, -629, -586, 910, -361, 288, -375, 88, 556, -578, -406, -87, 25, 377, -635, -445, -289, 646, -962, -487, -924, -968, -962, 502, 36, 129, -611, 54, -27, -496, 915, -84, -782, 349, 678, 332, -114, 345, 14, 119, 710, 821, -194, 988, 38, -369, 409, -559, -529, -298, -593, 705]));
