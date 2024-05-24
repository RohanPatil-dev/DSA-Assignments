
let arr = [0,1,9,8,4,0,0,2,7,0,6,0,9]

let a = []

for (let i = arr.length - 1; i > 0; i--) {
    
    if (arr[i] !== 0) {
        a.unshift(arr[i])
    }else{
        a.push(arr[i])
    }
    
}

console.log(a);