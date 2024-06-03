let value = "*+AB-CD";

function prefix_to_postfix()
{

    let arr = [];

    let length = value.length;

    for (let i = length - 1; i >= 0; i--)
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
    return arr[arr.length - 1];
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