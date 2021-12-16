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

  // 깊스너큐, 파선아실
  // 갈메기털빼
  DFS() {
    // 깊이우선탐색, DFS(Depth First Search)
    // Stack 이용!
    let 결과값 = [];
    let 스택 = [this.root];

    while (스택.length !== 0) {
      let current = 스택.pop();
      if (current.right) {
        스택.push(current.right);
      }
      if (current.left) {
        스택.push(current.left);
      }
      결과값.push(current.data);
    }
    return 결과값;
  }

  BFS() {
    // 너비우선탐색, DFS(Breadth First Search)
    // Queue 이용!
    let 결과값 = [];
    let 큐 = [this.root];

    while (큐.length !== 0) {
      let current = 큐.shift();
      if (current.left) {
        큐.push(current.left);
      }
      if (current.right) {
        큐.push(current.right);
      }
      결과값.push(current.data);
    }
    return 결과값;
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
