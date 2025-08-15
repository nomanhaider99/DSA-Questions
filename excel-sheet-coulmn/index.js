"use strict";
function convertToTitle(columnNumber) {
    const alphabets = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D',
        5: 'E',
        6: 'F',
        7: 'G',
        8: 'H',
        9: 'I',
        10: 'J',
        11: 'K',
        12: 'L',
        13: 'M',
        14: 'N',
        15: 'O',
        16: 'P',
        17: 'Q',
        18: 'R',
        19: 'S',
        20: 'T',
        21: 'U',
        22: 'V',
        23: 'W',
        24: 'X',
        25: 'Y',
        26: 'Z'
    };
    let alphabet = '';
    for (let x = 1; x <= columnNumber; x++) {
        for (let y = 1; y <= 26; y++) {
            alphabet += alphabets[y];
        }
    }
    return alphabet;
}
;
console.log(convertToTitle(3));
// inner loop run tills 26 first if more than 26 than runs till how much left till coulmn number provided
