
let arr = [34,3,31,98,92,23]

function sort() {
    for (let i = 0; i < arr.length; i++) {
 
         if (arr[i] > arr[i+1]) {
            arr[i] = arr[i+1]
          
         }else if(arr[i] < arr[i+1]){
             arr[i] = arr[i]
         }else if(arr[i] === 0){
             arr[i] = 0
         }
        
    }

    return arr

}


console.log(sort());

