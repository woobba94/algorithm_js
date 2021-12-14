class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index = this.arr.length - 1) {
    // index가 입력이 안되었을 때
    // index가 입력이 되었을 때
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }

    let result = this.arr.splice(index, 1);
    // let result = this.arr[index]
    // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)]
    return result;
  }

  empty() {
    if (arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop(2);
console.log(s);
