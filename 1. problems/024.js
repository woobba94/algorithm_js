// 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

let input = prompt("이름을 입력하세요.(en)");

// 처음에 이렇게 작성함.
// console.log(input.toUpperCase);

// toUpperCase는 함수형식으로 적어줘야함.
console.log(input.toUpperCase());

// input.length 와 헷갈리지 말 것!

// input.length  : O
// input.length(): X

// input.toUpperCase  : X
// input.toUpperCase(): O
