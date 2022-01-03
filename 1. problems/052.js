function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < povot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left, right);
  // return quickSort(left).concat(pivot, quickSort(right));
  // concat 공부
}

const array = prompt('배열을 입력하세요')
  .split(' ')
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));
