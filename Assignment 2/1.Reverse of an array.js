
let arr = [1,2,3,4,5]

let result = []

function reverse(){
 
for (let i = arr.length - 1; i >= 0; i--) {
         result.push(arr[i])
    }

    return result
}

console.log(reverse());