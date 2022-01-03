// 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나
// 들어갔을까요? 출력해 주세요.

let result = 0;
for (let i = 0; i < 1001; i++) {
  console.log(`${i} : ${getOneCount(i)}`);
  result += getOneCount(i);
}

function getOneCount(num) {
  let count = 0;
  while (num) {
    if (num % 10 === 1) count++;
    num = Math.floor(num / 10);
  }
  return count;
}
