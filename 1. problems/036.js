// 1~9까지의 숫자 중 하나를 입력하면
// 그 단의 구구단 결과를 한 줄에 출력

let input = prompt('출력할 단수 입력');
input = parseInt(input);

let result = '';

for (let i = 1; i <= 9; i++) {
  result += input * i;
  // 마지막엔 공백추가 X
  if (i != 9) result += ' ';
}

console.log(result);
