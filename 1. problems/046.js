// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

const start = 1;
const end = 20;

let s = '';
for (let i = start; i <= end; i++) {
  s += i;
}

let result = 0;
for (let i = 0; i < s.length; i++) {
  result += parseInt(s[i]);
}

console.log(result);
