let a = [12, 35, 1, 10, 34, 1]

function arrs() {
    const arr = a.sort((a, b) => { return a - b })

    console.log(arr);

    // approach 1
    console.log("approach 1 is :",arr[arr.length-2]);

    // approach 2
    for (let j = arr.length - 1; j > 0; j--) {
        return arr[j - 1]
    }
}

console.log(arrs());     