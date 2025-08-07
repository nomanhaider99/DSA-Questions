"use strict";
function isValid(s) {
    const validParanthesis = ['()', '[]', '{}'];
    for (let x = 0; x < s.length; x += 2) {
        if (!validParanthesis.includes(s.slice(x, x + 2))) {
            return false;
        }
        else {
            continue;
        }
    }
    return true;
}
;
console.log(isValid('(){}[]'));
console.log(isValid('(){}[['));
console.log(isValid('[{()}]'));
