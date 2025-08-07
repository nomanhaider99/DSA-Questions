function findTriplets(arr: number[]) {
    let result = false;

    for (let x = 0; x < arr.length; x++) {
        for (let y = 1; y < arr.length; y++) {
            for (let z = 2; z < arr.length; z++) {
                if (arr[x] + arr[y] + arr[z] == 0) {
                    result = true;
                    break;
                }
            }
        }
    }

    return result;
}

console.log(findTriplets([-3, -2, -1, 1, 2]));