// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터
// 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

const newDate = new Date();

// 미리초 > 초 > 분 > 시간 > 하루 > 1년
let y = Math.floor(newDate.getTime() / 1000 / 3600 / 24 / 365);

let result = 1970 + y;
console.log(result);

// 왜 1년이 더 붙는지 모르겠다.
