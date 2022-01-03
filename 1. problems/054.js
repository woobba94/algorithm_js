// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

let testCase = [
  '1 2 3 4 5', // y
  '1 2 6 4 5', // n
  '6 4 3 2 1', // y
  '4 100 200 1000 98842', // y
  '6121 4453 3543 2234 1213', // y
];

for (let k = 0; k < testCase.length; k++) {
  let arr = testCase[k].split(' ').map(Number);
  console.log(getResult(arr));
}

function getResult(arr) {
  let flag = false;
  if (arr[0] < arr[1]) flag = true;
  for (let i = 1; i < arr.length - 1; i++) {
    if ((!flag && arr[i] < arr[i + 1]) || (flag && arr[i] > arr[i + 1])) return 'NO';
  }

  return 'YES';
}
