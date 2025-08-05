"use strict";
function isPalindrome(s) {
    let formattedString = '';
    for (let x = 0; x < s.length; x++) {
        if (!s[x].match(/[a-zA-Z0-9]/)) {
            continue;
        }
        else {
            formattedString += s[x];
        }
    }
    let reversed = formattedString.split('').reverse().join('');
    if (reversed.toLowerCase() === formattedString.toLowerCase()) {
        return true;
    }
    return false;
}
;
console.log(isPalindrome('race car'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
