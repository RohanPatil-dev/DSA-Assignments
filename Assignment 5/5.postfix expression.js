
let exp = "231*+9-";


function postfix() {
  //create a stack
  let arr = [];

  // Scan all characters one by one
  for (let i = 0; i < exp.length; i++) {
    if (!isNaN((exp[i])))
      arr.push(exp[i].charCodeAt(0) - '0'.charCodeAt(0));
    else {
      let a = arr.pop();
      let b = arr.pop();

      switch (exp[i]) {
        case '+':
          arr.push(b + a);
          break;

        case '-':
          arr.push(b - a);
          break;

        case '/':
          arr.push(b / a);
          break;

        case '*':
          arr.push(b * a);
          break;
      }
    }
  }
  return arr.pop();
}


console.log(postfix());