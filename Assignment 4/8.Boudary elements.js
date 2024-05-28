
let matrix = [[1,2,3],[5,6,7],[1,2,3]]

function boundary() {
    if (matrix.length === 0) {
        return []
    }

    const rows = matrix.length
    const cols = matrix[0].length
    let boundary = []

    for (let i = 0; i < cols; i++) {
  
         boundary.push(matrix[0][i])
        
    }


    for (let j = 1; j < rows-1; j++) {
          boundary.push(matrix[j][cols - 1])
    }

    if(rows > 1){
        for (let k = cols-2; k >= 0; k--) {
             boundary.push(matrix[rows-1][k])
        }
    }


    if (cols > 1) {
        for (let m = rows-2; m > 0; m--) {
            boundary.push(matrix[m][0])            
        }
    }

    return boundary
}

console.log(boundary());