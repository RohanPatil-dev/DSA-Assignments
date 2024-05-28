
const matrix = [
    [1,2,1,4,8],
    [3,7,8,5,1],
    [8,7,7,3,1],
    [8,1,2,7,9]
]

function commonElements() {
    if (matrix.length === 0) return []
        const rows = matrix.length
        const cols = matrix[0].length
        const count = {}
        const common = []

        for (let i = 0; i < cols; i++) {
            count[matrix[0][i]] = 1
        }

        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < cols; k++) {
               
                const element = matrix[j][k]                

                if (count[element] === j) {
                    count[element] = j + 1

                    if (j === rows-1 && count[element] === rows) {
                        common.push(element)
                    }
                }
            }
            
        }
    

    return common
}

console.log(commonElements());