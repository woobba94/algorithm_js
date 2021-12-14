let input = prompt("문장 입력");
let len = input.length;
let result = "";

for (let i = len - 1; i >= 0; i--) {
    result += input[i];
}

console.log(result);
