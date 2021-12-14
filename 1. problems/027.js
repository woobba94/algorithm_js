// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고
// 수학 점수가 value인 객체를 출력해주세요.

let studentName = prompt('이름 입력(공백구분)');
let studentScore = prompt('점수 입력(공백구분)');

let studentNameArr = studentName.split(' ');
let studentScoreArr = studentScore.split(' ');

let students = {};

for (let i = 0; i < studentNameArr.length - 1; i++) {
  students[studentNameArr[i]] = parseInt(studentScoreArr[i]);
}

console.log(students);
