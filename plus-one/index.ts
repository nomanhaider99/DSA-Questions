function plusOne(digits: number[]): number[] {
    let stringed = '';
    for (let digit of digits) {
        stringed += String(digit);
    }

    console.log("stringed: ", stringed);
    let converted = String(Number(stringed) + 1);
    let splited = converted.split('');
    let result: number[] = [];

    splited.forEach((value) => result.push(Number(value)));
    return result;  
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));