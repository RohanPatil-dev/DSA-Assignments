
let matrix = [[1,2,3],[4,5,6],[7,8,9]]     //  [[7,4,1],[8,5,2],[9,6,3]]

function rotate() {
    
    const value = matrix.length;

    // using this array for store all rotated results from matrix and its default value is 0
    const result = Array.from({length : value},()=> Array(value).fill(0)) 

    console.log(result);
    
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
              
            result[j] [value-1-i] = matrix[i][j]
        } 
    }

    return result
}


console.log(rotate());
