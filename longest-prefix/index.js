"use strict";
function longestCommonPrefix(strs) {
    if (strs.length === 0)
        return '';
    let prefix = '';
    for (let i = 0; i < strs.length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// iterate over each string simultan
// checks every character if matches push one time in result 
// return if they stopped matches same
