// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?

const testCase = [
  [12, 31],
  [12, 25],
  [1, 1],
  [2, 29],
  [5, 24],
];
// 윤년이기 때문에 2월이 29일
const dayCount = [31, 29, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

// 출력함수가 더러워져서 요일배열추가
const week = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON'];

for (k in testCase) {
  let m = testCase[k][0];
  let d = testCase[k][1];
  let totalDay = d;
  for (let i = 0; i < m - 1; i++) {
    totalDay += dayCount[i];
  }
  print(m, d, totalDay);
}

// function print(m, d, total) {
//   console.log(`${m}월 ${d}일 : `);
//   if (total % 7 == 0) console.log('TUE');
//   else if (total % 7 == 1) console.log('WED');
//   else if (total % 7 == 2) console.log('THU');
//   else if (total % 7 == 3) console.log('FRI');
//   else if (total % 7 == 4) console.log('SAT');
//   else if (total % 7 == 5) console.log('SUN');
//   else console.log('MON');
// }

function print(m, d, total) {
  console.log(`${m}월 ${d}일 : ${week[total % 7]}`);
}
