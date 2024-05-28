
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function saddle() {
    let point = []

    for (let i = 0; i < matrix.length; i++) {

        let minValue = matrix[i][0]
        let index = 0

        for (let j = 1; j < matrix[i].length; j++) {

            if (matrix[i][j] < minValue) {
                minValue = matrix[i][j]

                index = j
            }

        }

        let isSaddle = true

        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][index] > minValue) {
                isSaddle = false
                break;
            }
        }

        if (isSaddle) {
            point.push({ value: minValue, row: i, col: index })
        }

    }


    return point.length > 0 ? point : null

}

console.log(saddle());