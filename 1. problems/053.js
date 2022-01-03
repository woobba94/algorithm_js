// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

let testCase = [
  '{}{}{}{}{}{}', // y
  '{}{}{}{}()()', // y
  '{}{}{}{}{()}{}', // y
  '{}{}{(){}[]}{}{}{}', // y
  '{}{[}{}]{}{]}{}', // n
];

for (let k = 0; k < testCase.length; k++) {
  let input = testCase[k];

  console.log(getResult(input));
}

function getResult(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
      if (
        (str[i] === ')' && stack[stack.length - 1] === '(') ||
        (str[i] === '}' && stack[stack.length - 1] === '{') ||
        (str[i] === ']' && stack[stack.length - 1] === '[')
      )
        stack.pop();
      else return 'NO';
    } else stack.push(str[i]);
  }
  return 'YES';
}
