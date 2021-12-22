// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성

let input = prompt('영문 문자열 입력');
let result = '';

for (let i = 0; i < input.length; i++) {
  if (97 <= input[i].codePointAt()) result += input[i].toUpperCase();
  else result += input[i].toLowerCase();
}

console.log(result);
