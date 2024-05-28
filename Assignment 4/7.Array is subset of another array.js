
let arr1 = [11,1,13,21,3,7]
let arr2 = [11,3,7,1]

function subset() {
    let set = new Set(arr1)

    for (const a of arr2) {
        if (!set.has(a)) {
            return false
        }
    }

    return true
}

console.log(subset());
