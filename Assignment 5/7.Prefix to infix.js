
let exp = "*+AB-CD";

function prefix_to_infix() {
    let stack = [];

    let val = exp.length;

    for (let i = val - 1; i >= 0; i--) {
        let c = exp[i];

        if (condition(c)) {
            let a = stack[stack.length - 1];
            stack.pop()
            let b = stack[stack.length - 1];
            stack.pop()

            let temp = "(" + a + c + b + ")";
            stack.push(temp);
        }
        else {
            stack.push(c + "");
        }
    }
    return stack[stack.length - 1];
}

function condition(exp) {
    switch (exp) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}


console.log(prefix_to_infix());

