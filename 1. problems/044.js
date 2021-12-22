// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램

let input = prompt('양의 정수 입력');

let result = 0;
while (input) {
  result += input % 10;
  input = Math.floor(input / 10);
}

console.log(result);
