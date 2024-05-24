
let result = 0

const arr = [1, 2, 4, 6, 3, 7, 8]    // output 5 

let a = arr.sort((a,b)=>{return a-b})

console.log(a);

function single(){
    for (let i = 0; i < a.length; i++) {

     if (a[i] !== i + 1) {
        return i + 1
     }
}

}


console.log(single());