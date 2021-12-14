// 첫번째 입력에서는 문자열이 입력되고,
// 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

let input = prompt('베이스 문자열 입력');
let target = prompt('찾을 문자열 입력');

for (let i = 0; i < input.length - target.length; i++) {
  if (input[i] === target[0]) {
    let flag = true;
    for (let j = 0; j < target.length; j++) {
      if (input[i + j] != target[j]) flag = false;
    }
    if (flag) {
      console.log(i);
      break;
    }
  }
}
