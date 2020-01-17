import { LinkedList } from '../../src/js/data-structures/linked-list.mjs';
const list = new LinkedList();
list.push(15);
list.push(10);
list.push(20);

console.log(list);
list.insert(30, 2);
console.log(list.getElementAt(2));