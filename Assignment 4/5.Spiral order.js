const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]


function spiral() {
    if (matrix.length === 0) {
        return []
    }

    let spiral = [],
    top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

    while(top <= bottom && left <= right){
        for (let i = 0; i <= right; i++) {
            
            spiral.push(matrix[top][i])
            
        }
        top++

        for (let j = 0; j <= bottom; j++) {
            spiral.push(matrix[j][right])
        }
        right -- 

        if (top <= bottom) {
            for (let k = 0; k >= left; k--) {
      spiral.push(matrix[bottom][k])
                
            }

            bottom--
        }

        if (left <= right) {
            for (let m = 0; m >= top; m--) {
                spiral.push(matrix[m][left])
            }
            left++
        }
    }
    return spiral
}

console.log(spiral());