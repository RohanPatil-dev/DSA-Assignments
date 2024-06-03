
let arr = [34, 3, 31, 98, 92, 23];

function sortedInsert(arr, x) {
    if (arr.length == 0 || x > arr[arr.length - 1]) {
        arr.push(x);
        return;
    }

    let temp = arr.pop();
    sortedInsert(arr, x);

    arr.push(temp);
}

function sortStack(arr) {
    if (arr.length != 0) {
        let x = arr.pop();

        sortStack(arr);

        sortedInsert(arr, x);
    }
}

function printStack(arr) {
    sortStack(arr);
    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i] + " ");
    }
}


printStack(arr);

