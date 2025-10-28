class Stack {
  constructor() {
    this.items = [];
  }

  empty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!this.empty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (!this.empty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  search(element) {
    for (let i = this.items.length - 1, pos = 0; i >= 0; i--, pos++) {
      if (this.items[i] === element) {
        return pos;
      }
    }
    return -1;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Стек:", stack.items);
console.log("Peek:", stack.peek());
console.log("Search 20:", stack.search(20));
console.log("Pop:", stack.pop());
console.log("Стек после pop:", stack.items);
console.log("Empty?", stack.empty());
