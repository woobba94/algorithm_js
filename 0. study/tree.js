// 트리의 기본형태
// value
// child - left
// child - right
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};

tree.root.value;
5;
tree.root.left.value;
3;

// object로 linked list와 tree를 만들 수 있는데
// 굳이 class로 만드는 이유는?

// 1. 확장성(예제를 보여드리겠습니다.)
// 2. OOP(Object-Oriented Programming, 객체 지향 프로그래밍)에 철학에 맞기 때문에

class Node {
  constructor(data) {
    this.data = data;
    // this.child = []; // 2진트리가 아닌 트리가 됨
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  insert(data) {
    let 새로운노드 = new Node(data);
    let 순회용현재노드 = this.root;

    while (순회용현재노드) {
      if (data === 순회용현재노드.data) {
        // 중복된 값은 탈락!
        return;
      }
      if (data < 순회용현재노드.data) {
        // 들어온 데이터가 작으면 왼쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
        if (!순회용현재노드.left) {
          순회용현재노드.left = 새로운노드;
          return;
        }
        순회용현재노드 = 순회용현재노드.left;
      }
      if (data > 순회용현재노드.data) {
        // 들어온 데이터가 크면 오른쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 또 내려가야합니다.
        if (!순회용현재노드.right) {
          순회용현재노드.right = 새로운노드;
          return;
        }
        순회용현재노드 = 순회용현재노드.right;
      }
    }

    this.데이터수 += 1;
  }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.root.data;
5;
t.root.left.data;
3;
t.root.right.right.data;
9;
t.root.right.left.data;
6;

// 아래처럼 넣는 순서에 따라 순서가 바뀜 주의!
let t = new Tree(5); // root노드는 처음에!!
t.append(3);
t.append(9);
t.append(8);
t.append(4);
t.append(1);
t.append(6);

t.root.data;
5;
t.root.left.data;
3;
t.root.left.left.data;
1;
t.root.right.left.data;
8;
t.root.right.left.left.data;
6;
