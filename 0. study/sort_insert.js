// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값) {
  for (const i in 정렬된배열) {
    if (삽입값 < 정렬된배열[i]) {
      return i;
    }
  }
  return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
  let 삽입값 = 입력값.shift();
  let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
  정렬된배열.splice(인덱스, 0, 삽입값);
  console.log(`인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`);
}

// 좀 더 어렵게
function insertIndex(sorted_arr, value) {
  //삽입될 위치를 찾는 함수
  for (let i in sorted_arr) {
    if (value < sorted_arr[i]) {
      return i;
    }
  }
  return sorted_arr.length;
}

function insertSort(arr) {
  let sorted_arr = [];

  while (arr.length != 0) {
    let value = arr.shift();
    //삽입될 위치를 반환함
    let index = insertIndex(sorted_arr, value);
    //삽입될 위치에 값을 반환
    sorted_arr.splice(index, 0, value);
  }
  return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));
