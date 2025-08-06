"use strict";
function largestNumber(nums) {
    let perms = [[]];
    for (let num of nums) {
        let newPerms = [];
        for (let perm of perms) {
            for (let i = 0; i <= perm.length; i++) {
                let newPerm = [...perm.slice(0, i), num, ...perm.slice(i)];
                newPerms.push(newPerm);
            }
        }
        perms = newPerms;
    }
    let combinations = [];
    for (let perm of perms) {
        let combination = '';
        for (let char of perm) {
            combination += String(char);
        }
        combinations.push(combination);
    }
    let largest = Number(combinations[0]);
    for (let num of combinations) {
        if (Number(num) >= largest) {
            largest = Number(num);
        }
    }
    return String(largest);
}
;
console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([10, 2]));
// find combinations 
// find largest 
// return it
