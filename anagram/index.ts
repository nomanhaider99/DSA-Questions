function isAnagram(a: string, b: string): boolean {
    let result = false;
    const splitted1 = a.split('');
    const splitted2 = b.split('');
    a.toLowerCase();
    b.toLowerCase();

    for (let char of splitted1) {
        if (b.split('').includes(char)) {
            result = true;
            continue;
        }
        break;
    } 

    for (let char of splitted2) {
        if (a.split('').includes(char)) {
            result = true;
            continue;
        }
        break;
    } 

    return result;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Triangle", "Integral"))