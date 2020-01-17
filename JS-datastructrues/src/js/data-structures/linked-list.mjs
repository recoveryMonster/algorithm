import { defalutEquals } from '../util.mjs';
import { Node } from './models/linked-list-models.mjs';

class LinkedList{
  constructor(equalsFn = defalutEquals) {
    this.count = 0;// 链表中存储的数量
    this.head = undefined; // 第一个元素的引用
    this.equalsFn = equalsFn; // 用于比较链表中的元素是否相同，也可以实例化时自行传入
  }
}