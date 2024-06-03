let value = "AB+CD-*";

function prefix_to_postfix()
{

    let arr = [];

    for (let i = 0; i < value.length; i++)
    {
        if (condition(value[i]))
        {
            let a = arr[arr.length - 1];
            arr.pop();
            let b = arr[arr.length - 1];
            arr.pop();


            let result = a + b + value[i];

            arr.push(result);
        }
        else {
            arr.push(value[i] + "");
        }
    }
    
      let results = arr.join("")

      let a = []

    for (let i = results.length - 1; i >= 0; i--) {
        
        a.push(results[i])
    }

    return a.join("")
}

function condition(x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}
 
 

console.log(prefix_to_postfix());