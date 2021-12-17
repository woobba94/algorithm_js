// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램

let result = {
  원범: 0,
  혜원: 0,
  유진: 0,
};

let input = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';

let arr = input.split(' ');

for (let i = 0; i < arr.length; i++) {
  result[arr[i]]++;
}
let maxVal = 0;
let selected = '';
for (let key in result) {
  if (maxVal < result[key]) {
    maxVal = result[key];
    selected = key;
  }
}
console.log(`${selected}(이)가 총 ${maxVal}표로 반장이 되었습니다.`);
