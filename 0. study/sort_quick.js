// 3.4 퀵정렬(best - O(nlog2n), worst - O(n**2))
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

// //피봇값 : 66
// [54, 32, 10, 5, 11, 15] + [66] + [77]

// //피봇값 : 54(66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
// [32, 10, 5, 11, 15], [54] + [66] + [77]

// //피봇값 : 32
// [10, 5, 11, 15], [32] + [54] + [66] + [77]

// //피봇값 : 10
// [5] + [10], [11, 15] + [32] + [54] + [66] + [77]

// //피봇값 : 11
// [5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
function 퀵정렬(입력배열) {
  let 입력배열의길이 = 입력배열.length;

  if (입력배열의길이 <= 1) {
    return 입력배열;
  }

  const 피벗값 = [입력배열.shift()]; //기준점
  const 그룹하나 = [];
  const 그룹둘 = [];

  for (let i in 입력배열) {
    if (입력배열[i] < 피벗값) {
      그룹하나.push(입력배열[i]);
    } else {
      그룹둘.push(입력배열[i]);
    }
  }

  console.log(`그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`);

  return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

console.log(퀵정렬(입력값));

// 참고용 Notion 코드
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; //기준점
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(quickSort(arr));
