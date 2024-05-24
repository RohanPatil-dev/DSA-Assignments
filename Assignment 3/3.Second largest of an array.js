let a = [12, 35, 1, 10, 34, 1]

function arrs() {
    const arr = a.sort((a, b) => { return a - b })

    console.log(arr);

    for (let j = arr.length - 1; j > 0; j--) {

        return arr[j - 1]
    }
}

console.log(arrs());     