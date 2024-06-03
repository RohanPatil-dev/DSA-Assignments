let arr = "{[()]}"


function balanced() {
    let findSameSymbols = { 
   "(": ")",
   "[": "]",
   "{": "}"
}

let newArray = []

for (let i = 0; i < arr.length; i++) {

    console.log("main",arr[i]);

    if(findSameSymbols[arr[i]]){
        newArray.push(arr[i]);

        console.log("newArray",newArray);
      }else{
        let top = newArray.pop(arr[i])

        console.log("top",top);
    
        if(arr[i] !== findSameSymbols[top]){
          return false;
        }
      }
}


return newArray.length === 0;
};



console.log(balanced());