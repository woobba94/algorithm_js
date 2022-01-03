// 총 문자열의 길이는 50으로 제한하고
// 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고,
// 나머지 빈 부분에는 '='을 채워 넣어주세요.
const MAX_SIZE = 50;
let testCase = ['abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde', 'woojin', 'ABC', 'AB', 'A'];

for (let i = 0; i < testCase.length; i++) {
  let input = testCase[i];
  console.log(getResult(input));
}

function getResult(str) {
  let result = '';
  let count = MAX_SIZE / 2 - str.length / 2;
  for (let i = 0; i < count; i++) {
    result += '=';
  }
  result += str;
  if (str.length % 2 != 0) count--;
  for (let i = 0; i < count; i++) {
    result += '=';
  }
  return result;
}
