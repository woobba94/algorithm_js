// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 캐시문제
// 키워드 : LRU 알고리즘, 페이지 교체 알고리즘
// 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
// 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
// 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60

testcase = [
  [3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']],
  [3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']],
  [
    2,
    [
      'Jeju',
      'Pangyo',
      'Seoul',
      'NewYork',
      'LA',
      'SanFrancisco',
      'Seoul',
      'Rome',
      'Paris',
      'Jeju',
      'NewYork',
      'Rome',
    ],
  ],
];

for (const [cacheSize, cities] of testcase) {
  console.log(solution(cacheSize, cities));
}

// 50, 21, 60

function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let index = cache.indexOf(city);
    if (index !== -1) {
      // hit
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    } else {
      // miss
      time += 5;
      cache.push(city);
      if (cacheSize < cache.length) {
        cache.shift();
      }
    }
  }
  return time;
}
