let input = prompt("확인할 숫자 입력");

if (is배수(input, 3)) console.log("짝");
else console.log(input);

function is배수(num, base) {
    // num이 base로 나누어떨어지면 true
    if (num % base === 0) return true;
    return false;
}
