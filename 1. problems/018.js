// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

let input = prompt(
    "국어점수, 수학점수, 영어점수 입력(공백으로 구분)"
);
// ' ' 공백으로 나누어 score 배열만들기
let score = input.split(" ");
const size = 3;
let sum = 0;

for (let i = 0; i < size; i++) {
    // 각 요소를 숫자로 바꾸어 sum에 누적
    sum += parseInt(score[i]);
}

let result = Math.floor(sum / size);

console.log(result);

// Math.ceil() : 소수점 올림, 정수 반환
// Math.floor() : 소수점 버림, 정수 반환
// Math.round() : 소수점 반올림, 정수 반환
