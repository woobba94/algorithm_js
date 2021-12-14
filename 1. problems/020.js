// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때
// 그 몫과 나머지를 공백으로 구분하여 출력하세요.

let input = prompt(
    "[a의 b로 나눈 몫, 나머지 구하기] a, b 입력 (공백으로 구분)"
);

let num = input.split(" ");

let 몫 = Math.floor(parseInt(num[0]) / parseInt(num[1]));
let 나머지 = parseInt(num[0]) % parseInt(num[1]);

console.log(`몫 : ${몫} 
나머지 : ${나머지}`);
