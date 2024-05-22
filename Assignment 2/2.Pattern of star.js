let result = "";

function pattern(val) {
  for (let i = 0; i <= val; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "\n";
  }

  return result;
}

console.log(pattern(5));
