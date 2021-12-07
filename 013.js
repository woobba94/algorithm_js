let planets = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성",
];

// 배열 인덱스가 0부터 시작하기에 1을 빼준다.
let input = prompt("몇 번째 행성을 출력할까요?") - 1;

console.log(planets[input]);
