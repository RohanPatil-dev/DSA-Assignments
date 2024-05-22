
const arr = [2, 3, 1, 5, 7]

const target = 8;

function sum() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            
            if (arr[i] + arr[j] === target) {
                
            return [i,j]
            }
        }
    
    }
    
}


console.log(sum());