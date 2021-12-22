// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

let input = parseInt(prompt('10진수 입력'));

let result = '';
while (input) {
  result += input % 2;
  input = Math.floor(input / 2);
}

console.log(result.split('').reverse().join(''));
