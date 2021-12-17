// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

let testCase = [
  'querty', // euerty
  'hqllo my namq is hyqwon', // hello my name is hyewon
];

// 케이스 순회
for (let caseCount in testCase) {
  let input = testCase[caseCount];
  let result = '';

  // 기존 문자열 순회
  for (let i = 0; i < input.length; i++) {
    // 조건에 따라 result 문자열을 만듦
    if (input[i] === 'q') result += 'e';
    else result += input[i];
  }
  console.log(result);
}
