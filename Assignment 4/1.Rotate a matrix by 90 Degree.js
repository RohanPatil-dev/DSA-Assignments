
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]     //  [[7,4,1],[8,5,2],[9,6,3]]

function rotate() {

    const value = matrix.length;
    // console.log(value);
    
    // it creates a n*n matrix filled with 0
    const result = []

    for (let i = 0; i < value; i++) {
        const row = []
        for (let j = 0; j < value; j++) {
            row.push(0)
        }
        result.push(row)

    }

    // console.log(result);

    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {

            console.log("result[j]", result[j]);

            console.log(matrix[i][j]);

            console.log(result[j][value - 1 - i] = matrix[i][j]);

            result[j][value - 1 - i] = matrix[i][j]


        }
    }

    return result
}


console.log(rotate());
