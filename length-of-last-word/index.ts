function lengthOfLastWord(s: string): number {
    let result = '';
    const trimmed = s.trim();
    for (let x = trimmed.length-1; x >= 0; x--) {
        if (trimmed[x] !== ' ') {
            result += trimmed[x];
        } else {
            break;
        }
    }

    return result.length;  
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));

// start loop from the end 
// add each char to string until it became ' ' 
// break it and return length