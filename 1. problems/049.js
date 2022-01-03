// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

let testCase = [
  '10 9 8 7 6 5 4 3 2 1', // 10
  '100 9 8 7 6 5 4 3 2 1', // 100
  '10 9 8 7 6 50 4 3 2 1', // 50
  '10 9 8 7 6 5 4 3 20 1', // 20
  '10 9 8 7 6 5 40 3 2 1', // 40
];

for (let k = 0; k < testCase.length; k++) {
  let input = testCase[k];

  let arr = input.split(' ');
  console.log(getMax(arr));
}

function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i]);
    if (max < num) max = num;
  }
  return max;
}
