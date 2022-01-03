// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

let testCase = [32545423, 65744765, 1432, 134232, 1234213545624];

for (let k = 0; k < testCase.length; k++) {
  let num = testCase[k];

  console.log(getResult(num));
}

function getResult(num) {
  num += '';
  let result = '';
  let count = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    count++;
    if (count === 3 && i != 0) {
      result += num[i] + ',';
      count = 0;
    } else result += num[i];
  }
  return result.split('').reverse().join('');
}
