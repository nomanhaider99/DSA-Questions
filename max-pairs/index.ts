function maxPairs(arr: number[]) {
    let result = [];
    for (let x = 0; x < arr.length; x++) {
        for (let y = 1; y < arr.length; y++) {
            if (x !== y) {
                if (arr[x] === arr[y]) {
                    arr.splice(x, 1);
                    arr.splice(y, 1);
                    console.log(arr[x], arr[y])
                    result.push([arr[x], arr[y]]);
                }
            }
        }
    }

    console.log(result)
    return result.length;
}

console.log(maxPairs([1, 1, 2, 2, 3, 3, 3, 3]));

