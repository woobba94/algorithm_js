// 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성

let arr = prompt('키 입력(공백구분)').split(' ');

let isNO = false;
for (let i = 0; i < arr.length - 1; i++) {
  // 앞 사람의 키가 1번 이라도 크면 NO
  if (parseInt(arr[i]) > parseInt(arr[i + 1])) {
    isNO = true;
    break;
  }
}

if (isNO) console.log('NO');
else console.log('YES');
