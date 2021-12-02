let a = 1;
typeof a; // 'number'

// 소수점도 'number'다. float 이 아니다!!!
a = 2.22;
typeof a; // 'number'

// 문자열과 문자의 구분이 없다. char 는 없다!!!
a = "p";
typeof a; // 'string'

// 아래는 전부 'object'
a = [1, 2, 3];

a = ["a", "b", "c"];

a = { one: 1, two: 2, three: 3 };

a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

typeof a;
