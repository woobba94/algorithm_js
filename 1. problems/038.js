// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

let testCase = [
  '97 86 75 66 55 97 85 97 97 95', // 6
  '97 97 97 66 55 97 85 97 97 95', // 8
  '97 97 97 97 97 97 85 97 97 95', // 10
  '97 86 75 66 55 99 85 35 21 95', // 3
  '97 86 75 66 55 99 85 97 97 95', // 5
];

// 테스트 케이스 순회
for (let k in testCase) {
  // 배열로 바꿈
  let arr = testCase[k].split(' ');
  // 3등 까지
  let count = 3;
  // 필요사탕 기본 3개
  let candyCount = 3;
  // 오름차순 정렬
  sort(arr);
  // 정렬된 배열 순회
  for (let i = 0; i < arr.length; i++) {
    // 3등까지만 순회
    if (!count) break;
    // 점수가 동일할경우 사탕추가, 등수는 그대로
    if (arr[i] == arr[i + 1]) candyCount++;
    // 점수가 다를경우 등수 소모
    else count--;
  }
  console.log(candyCount);
}

// 버블정렬
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
