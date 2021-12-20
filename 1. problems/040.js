// 첫번째 입력으로 제한 무게가 주어지고
// 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다.
// 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

const testCase = [
  '50 5 10 10 10 10 20', // 4
  '50 3 10 20 30', // 2
  '50 5 40 50 5 5 30', // 3
  '50 5 60 50 40 30 20', // 1
  '50 5 10 20 5 5 10', // 5
];
// testCase 순회
for (let k = 0; k < testCase.length; k++) {
  let test = testCase[k].split(' ');
  // 제한 무게
  let limit = test[0];
  // 인원
  let n = test[1];
  let count = 0;
  // 인덱스 2부터 인원수만큼 순회
  for (let i = 2; i < n + 2; i++) {
    // 탈수있을 경우
    if (0 <= limit - test[i]) {
      limit -= test[i];
      count++;
    }
  }
  console.log(count);
}
