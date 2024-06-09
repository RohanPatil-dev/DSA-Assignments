
let arr = [4, 5, 2, 25]

function nextGreater() {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i + 1; j++) {
            if (arr[i + 1] > arr[i]) {
                arr[i] = arr[i + 1]
            } else if (arr[i + 1] === undefined) {
                arr[i] = -1
            } else {
                arr[i] = arr[i+1]
            }
        }
    }
    return arr
}
console.log(nextGreater());