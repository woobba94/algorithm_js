let input = 5;

let arr = "";

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input + i; j++) {
        if (j >= input - i - 1) {
            arr += "*";
        } else arr += " ";
    }
    arr += "\n";
}

console.log(arr);
