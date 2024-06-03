
let value = "AB+CD-*";

function postfix_to_infix() {
    let arr = [];

    for (let i = 0; i < value.length; i++) {

        if (condition(value[i])) {
            arr.push(value[i] + "");
        }

        else {
            let a = arr[arr.length - 1];
            arr.pop();
            let b = arr[arr.length - 1];
            arr.pop();
            arr.push("(" + b + value[i] +
                a + ")");
        }
    }

    return arr[arr.length - 1];
}

function condition(x) {
    return (x >= 'a' && x <= 'z') ||
        (x >= 'A' && x <= 'Z');
}

console.log(postfix_to_infix());
