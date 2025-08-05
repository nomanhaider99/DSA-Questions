"use strict";
function removeDuplicates(nums) {
    let result = [];
    let repeatedItems = [];
    for (let num of nums) {
        if (!result.includes(num)) {
            result.push(num);
        }
        else {
            repeatedItems.push("_");
        }
    }
    console.log(result);
    return result.length;
}
;
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// remove duplicates 
// return total uniques length
// add underscores at the end
