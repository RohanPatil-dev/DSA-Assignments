
let arr = [1,2,2,3,3,3,4,4,4,4]

 const result = {}

for (let i = 0; i < arr.length; i++) {
    
    if (!result[arr[i]]) {
         result[arr[i]] = 1
    }else{
        result[arr[i]] =  result[arr[i]] + 1
    }
    
}

console.log(result);