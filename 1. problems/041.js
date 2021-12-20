// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (i in testCase) {
  if (isPrime(testCase[i])) console.log(`${testCase[i]}: YES`);
  else console.log(`${testCase[i]}: NO`);
}

function isPrime(num) {
  // 2부터 제곱근까지만 체크
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 한번이라도 나누어 떨어지면 소수 아님
    if (num % i == 0) return false;
  }
  return true;
}
