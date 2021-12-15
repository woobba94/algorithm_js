// 3.1 선택정렬
// 직접 해보기
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [199, 22, 33, 32, 64, 72, 222, 233];
let 후 = [12];

let 전 = [199, 33, 32, 64, 72, 222, 233];
let 후 = [12, 22];

let 전 = [199, 33, 64, 72, 222, 233];
let 후 = [12, 22, 32];
//
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

let 길이 = 입력값.length;

// 주의해야 할 사항 : pop을 하면 length가 줄어듭니다!
// for (let i = 0; i < 입력값.length; i++) {
//     console.log(입력값.pop())
//     console.log(i)
// }

for (let i = 0; i < 길이; i++) {
  let 최솟값 = Math.min(...입력값);
  정렬된배열.push(최솟값);
  입력값.splice(입력값.indexOf(최솟값), 1);
}

console.log(정렬된배열);

///////

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

let 길이 = 입력값.length;

while (!!입력값.toString()) {
  let 최솟값 = Math.min(...입력값);
  정렬된배열.push(최솟값);
  입력값.splice(입력값.indexOf(최솟값), 1);
}

console.log(정렬된배열);

// 3.1 선택정렬(메서드 최소화)
// 제대로 하려면(자리 바꾸는 것까지)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    // 자리바꿈
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(selectionSort(arr));
// [12, 22, 32, 33, 64, 72, 199, 222, 233]
