"use strict";
function longestSuffix(strs) {
    if (strs.length === 0)
        return '';
    let suffix = '';
    for (let x = 0; x < strs[0].length; x++) {
        let reversedRefernce = strs[0].split('').reverse().join('');
        let char = reversedRefernce[x];
        for (let y = 1; y < strs.length; y++) {
            let reversed = strs[y].split('').reverse().join('');
            console.log(reversed[x], char);
            if (reversed[x] !== char) {
                return suffix;
            }
        }
        suffix += char;
    }
    console.log("ans: ", suffix);
    return suffix;
}
// console.log(longestSuffix(["racing", "biking", "hiking"]));
console.log(longestSuffix(["hello", "yellow", "mellow"]));
// take ref of first string
// iterate from end of each char
