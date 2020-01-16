class Queue{
  constructor() {
    this.count = 0; // 队列的大小
    this.lowestCount = 0;// 队列的第一个元素
    this.items = {}; //存储队列
  }
  // 添加元素到队列尾部
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  // 移除队列的第一个元素 并返回移除的元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  // 返回队列中的第一个元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  isEmpty() {
    return (this.count - this.lowestCount) === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let queueString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++){
      queueString = `${queueString},${this.items[i]}`;
    }
    return queueString;
  }
}

export {
  Queue
}