// <pass>부분에 배열 내장함수를 이용하여
// 코드를 입력하고 다음과 같이 출력되게 하세요.
//
// var arr = [200, 100, 300];
// <pass>
// console.log(arr);
// 출력 : [200, 100, 10000, 300]

var arr = [200, 100, 300];

// // 1번 : 해당 값 뽑아서 조작하기 (300 + 700)
// arr[2] += 700;
// arr.push(300);

// // 2번 : 꼬리에 복사하고 꼬리앞에 끼워넣기
// arr.push(300);
// // 2번째 인덱스에, 1개를 추가, 1000을
// arr.splice(2, 1, 1000);

// // 2번의 일반화
// arr.push(arr[arr.length - 1]);
// arr.splice(arr.length - 2, 1, 1000);

// console.log(arr);
