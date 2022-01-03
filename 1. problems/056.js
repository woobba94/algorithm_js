// 다음의 객체가 주어졌을 때,
// 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

let nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

let koreaWidth = nationWidth.korea;
let min = 0;
let result = '';
for (i in nationWidth) {
  if (min === 0) min = nationWidth[i];
  else if (min > Math.abs(koreaWidth - nationWidth[i])) {
    min = Math.abs(koreaWidth - nationWidth[i]);
    result = i;
  }
}

console.log(`${result} ${min}`);
