let arr = "{[()]}"


function balanced() {
    let Parenthesis = { 
   "(": ")",
   "[": "]",
   "{": "}"
}

let newArray = []

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i]);

    if(Parenthesis[arr[i]]){
        newArray.push(arr[i]);
      }else{
        let top = newArray.pop(arr[i])
    
        if(arr[i] !== Parenthesis[top]){
          return false;
        }
      }
}
return newArray.length === 0;
};


console.log(balanced());