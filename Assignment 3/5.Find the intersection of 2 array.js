

let a = [1,2,2,1]

let b = [2,2]

let result = a.filter(value => {return b.includes(value)})

console.log(result);