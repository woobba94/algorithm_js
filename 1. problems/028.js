// 입력으로 문자열이 주어지면
// 2-gram으로 출력하는 프로그램을 작성해 주세요.

let input = prompt('문자열 입력');

for (let i = 0; i < input.length - 1; i++) {
  console.log(`${input[i]} ${input[i + 1]}`);
}
