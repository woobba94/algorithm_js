// 여러개의 숫자가 입력되면,
// 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성

let input = prompt('숫자입력(공백으로구분)').split(' ');

let result = [];
for (let i = input.length - 1; i >= 0; i--) {
  result.push(input[i]);
}
console.log(result);

// 두번째풀이 (문자열 그대로 뒤집기)
// 1. 문자열을 배열로 만듦
// 2. reverse로 배열 뒤집기
// 3. join(): 배열의 요소를 연결해 하나의 문자열로 만듬.

let input2 = prompt('숫자입력(공백으로구분)');
console.log(input2.split('').reverse().join(''));
