let matrix = [[1,2,3],[4,5,6],[7,8,9]]     //  [[1,4,7],[2,5,8],[3,6,9]]


function transpose() {
    const row = matrix.length;
    const col = matrix[0].length
    const result = Array.from({length : col},()=> Array(row).fill(0)) 

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
              
            result[j][i] = matrix[i][j]
        } 
    }

    return result
}

console.log(transpose());