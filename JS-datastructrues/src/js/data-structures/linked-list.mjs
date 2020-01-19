import { defaultEquals } from '../util.mjs';
import { Node } from './models/linked-list-models.mjs';

class LinkedList{
  constructor(equalsFn = defaultEquals) {
    this.count = 0;// 链表中存储的数量
    this.head = null; // 第一个元素的引用
    this.equalsFn = equalsFn; // 用于比较链表中的元素是否相同，也可以实例化时自行传入
  }

  // 向链表尾部添加新元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {// 说明是空链表
      this.head = node;
    } else {
      current = this.head; // 获得第一个元素的指针
      while (current.next != null) { // 递归获取到最后一个元素
        current = current.next;
      }
      // 将next 赋值为新元素，建立链接
      current.next = node;
    }

    this.count++;
  }

  // 指定位置移除元素
  removeAt(index) {
    // 检查越界性
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index == 0) { // 移除第一个元素
        this.head = current.next;
      } else {
        // let previous;
        // for (let i = 0; i < index; i++){
        //   previous = current;
        //   current = current.next;
        // }
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        // 将 previous 与 current 下一项连接起来，从而跳过 current，移除这一项
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  // 返回链表中的指定元素，如果不存在则返回 undefiend
  getElementAt(index) {
    // 检查越界性
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; ++i){
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  // 任意位置插入元素，如果越界则返回false
  insert(element, index) {
    // 检查越界性
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {// 插入到第一位
        node.next = this.head;
        this.head = node;
      } else {
        // 获取插入位置之前的元素
        const previous = this.getElementAt(index - 1);
        // 获取插入位置的元素  即插入元素的后一个引用
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;// 更新链表的长度
      return true;
    }
    return false;
  }

  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; ++i){
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  //从列表中移除元素
  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 判断是否为空
  isEmpty() {
    return this.count === 0;
  }
  // 返回链表元素的个数
  size() {
    return this.count;
  }

  // 返回链表第一个元素的指针
  getHead() {
    return this.head;
  }

  // 将链表转换为一个字符串
  toString() {
    if (this.head == null) {
      return '';
    }
    let current = this.head.next;
    let objString = this.head.element;
    for (let i = 1; i < this.count && current != null; ++i){
      objString += `,${current.element}`;
      current = current.next;
    }
    return objString;
  }
}


export {
  LinkedList,
}