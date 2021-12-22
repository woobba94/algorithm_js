// 아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.

const people = {
  이호준: '01050442903',
  이호상: '01051442904',
  이준호: '01050342904',
  이호준: '01050442903',
  이준: '01050412904',
  이호: '01050443904',
  이호준: '01050442903',
};

let result = new Set();
for (let key in people) {
  result.add(people[key]);
}
//size 는 set 객체 내 값의 개수를 반환합니다.
console.log(result.size);
