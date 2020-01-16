// 双端队列
class Deque{
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  // 前端添加数据
  addFront(element) {
    if (this.isEmpty()) { // 如果队列为空
      this.addBack(element);
    }else if (this.lowestCount > 0) {// 如果已经有元素从前端移除
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else { // 前端没有元素被移除
      for (let i = this.count; i >0; i--){
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  // 后端添加元素
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 移除前端的元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let front = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return front;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    let end = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return end;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekEnd() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++){
      objString += `,${this.items[i]}`;
    }
    return objString;
  }
}

export { Deque };