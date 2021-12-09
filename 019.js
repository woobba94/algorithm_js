// 공백으로 구분하여 두 숫자 a와 b가 주어지면,
// a의 b승을 구하는 프로그램을 작성하세요.

let input = prompt(
    "[a의 b승 구하기] a, b 입력 (공백으로 구분)"
);

let num = input.split(" ");

console.log(parseInt(num[0]) ** parseInt(num[1]));
