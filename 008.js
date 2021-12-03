// 오브젝트의 키가 중복이 있다는것 자체가 문제가 있음.
// 중복될 경우 가장 마지막에 읽힌 키의 벨류로 덮어씀
var d = {
    height: 180,
    weight: 78,
    weight: 84,
    temperature: 36,
    eyesight: 1,
};

console.log(d["weight"]); // 84
