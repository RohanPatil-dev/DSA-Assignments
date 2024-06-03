let arr = "{[()]}"

let a = []

function balanced() {
    for (let i = 0; i < arr.length/2; i++) {
        for (let j = arr.length - 1; j >= arr.length - 2 ; j--) {

            console.log(arr[i],"",arr[j]);
               
            if (arr[i] === arr[j]) {
                a.push(true)
            }else{
                a.push(false)
            }
               
        }
        
    }

    console.log(a);

    let findTrue = a.every((value) => value == true)

     return findTrue
}

console.log(balanced());