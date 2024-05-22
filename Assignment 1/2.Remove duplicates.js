const arr = [1, 2, 1, 1, 2, 2, 3]

const k = 1;

function removeDuplicate() {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i] = arr[i]
            k++
        }

    }
}

console.log(removeDuplicate());