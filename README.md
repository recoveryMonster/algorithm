# algorithm
学习数据结构及算法的仓库，相关算法通过 TypeScript 实现。

众所周知，Node.js 遵循的是 CommonJS 规范进行模块化开发，因为 ES6 在 JavaScript 标准中引入了官方的模块功能。因此，在这里都是用的是 ES6 模块导出。点击查看[相关差别及使用方法](https://recoverymonster.github.io/post/exportexport-default-he-exportsmoduleexports-de-qu-bie-yu-lian-xi/)。

由于 Node 中，ES6 导入还是一个实验功能，因此我们需要将文件扩展名由 js 修改为 mjs，并在 node 命令后添加 `--experimental-modules` 来执行代码。

同时本项目使用 TypeScript，因为它可以使用一些 JavaScript 没有提供的面向对象的概念，如接口和私有属性（在开发数据结构和排序算法时非常有用）。

##  栈

栈是遵循**后进先出（ LIFO ）**原则的有效集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端叫做栈底。在栈里，新元素都靠近栈底，旧元素都接近栈底。类似一类书或者餐厅里叠放的盘子。

栈也被用在编程语言的编译器和内存中保存变量、方法调用等，也被用于浏览器历史记录（浏览器的返回按钮）。

### 创建一个基于数组的栈

这里创建一个类来表示栈。详细代码可见 [stack-array.mjs] 文件。首先声明 Stack 类开始。

``` js
class Stack{
  constructor() {
    this.items = [];
  }
}
```

这里我们选择数组来保存栈里的元素。由于栈遵循 **LIFO** 原则，需要对元素的插入和删除功能进行限制。因此，要为其声明一些方法。

- push(element(s)) ：添加一个（或几个）新元素到栈顶。
- pop() ：移除栈顶的元素，同时返回被移除的元素。
- peek() ：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
- isEmpty() ：如果栈里没有任何元素就返回 true，否则返回 false。
- clear() ：移除栈里的所有元素。
- size() ：返回栈里的元素个数。该方法和数组中的 length 属性类似。

![](https://raw.githubusercontent.com/recoveryMonster/HexoImages/master/Gridea/20200110102157.png)

``` js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1]; 
  }

  isEmpty() {
    return this.items.length === 0;
  }
  
  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

export {
  Stack as StackArray
};
```

### 创建一个基于对象的 Stack 类

由于数组是元素的有序集合，为了保证元素排列有序，因此他会占用更多空间。因此我们需要一个既能直接获取元素，占用较少的内存空间，并且仍然保证所有元素按照我们的需要排列，因此我们使用对象来存储所有的栈元素，并保证它们的顺序遵循 LIFO 原则。

首先创建一个 Stack 类（ [stack.mjs 文件]）。这里使用 count 属性来帮助我们记录栈的大小，以及添加和删除元素。

```
class Stack{
  constructor() {
    this.count = 0;
    this.items = {};
  }
}
```

对于使用对象创建的 Stack，除了需要实现跟数组版本的方法之外，还需要实现 **toString** 方法，因为数组可以直接使用数组提供的 toString 方法来输出栈的内容。

``` js
// 使用 stack-array.mjs 输出的内容
Stack { items: [ 5, 8 ] }

// 直接使用 stack.mjs 输出的内容
Stack { count: 2, items: { '0': 5, '1': 8 } }
```

``` js
class Stack{
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {// 如果为空
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty) {
      return undefined;
    }
    return this.items[this.count--];
  }

  clear() {
    this.items = {};
    this.count = 0;
    // 或者遵循栈的 LIFO 规则
    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
  
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = this.items[0];
    for (let i = 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

export {
  Stack as StackObject
};
```

这时我们进行 pop 进行添加数据之后输出可得：

```js
const stack = new StackObject();
// console.log(stack.isEmpty()); // true
stack.push(5);
stack.push(8);
console.log(stack.toString()); // 5,8
```

基于数组或者基于对象的 Stack 类来说，两者都提供了相同的功能，只是内部实现不一样。

### 保护数据结构的内部元素

在创建别的开发这也可以使用的数据结构或者对象时，我们希望保护内部的元素，只有暴露出来的方法才能修改内部结构。但是 ES6 中的类时基于原型的，这就代表无法声明私有变量或者方法。因此只能使用以下方法来实现：

- 下划线命名约定，来标价一个属性为私有属性（实际上并不能保护数据）。
- 使用 Symbol 实现类，但这实际上仍然会被破坏，详见 stackSymbol.mjs 文件。
- 使用 ES6 的 WeakMap 实现类，WeakMap 可以存储键值对，其中键是对象，值可以是任意数据，但采用这种方法，代码的可读性不强，且扩展该类时无法继承私有属性。详见 stackWeakMap.mjs 文件。

## 队列和双端队列

队列遵循**先进先出（ FIFO ）**原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。现实中，最常见的队列就是排队。

### 创建队列

首先声明 Queue 类，为了写出一个在获取元素时具有更高效的数据结构，我们使用一个对象来存储我们的元素。

``` js
constructor() {
    this.count = 0; // 队列的大小
    this.lowestCount = 0;// 队列的第一个元素
    this.items = {}; //存储队列
  }
```

接下来声明一些队列可用的方法：

1. enqueue(element(s)) ：向队列尾部添加一个（ 或多个 ）新的元素。
2. dequeue() ：移除队列的第一项（ 排在最前面的一项 ）并返回被移除的元素。
3. peek() ：返回队列中的第一个元素。
4. isEmpty() ：队列中不包含任何元素，返回 true，否则返回 false。
5. size() ：返回队列中包含的元素个数。
6. clear() ：清除队列中的元素。
7. toString() ：返回队列的内容。

``` js
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
```

### 双端队列

**双端队列**（ deque，或称 double-ended queue ）是把队列和栈相结合的一种数据结构。同时遵循了先进先出和后进先出的原则。例如电影中的队伍，一个刚买票的人如果只是需要简单询问信息，可以直接回到队伍头部。另外，在队伍末尾的人如果赶时间，他可以直接离开队伍。

双端队列所需的方法：

-  addFront(element) ：该方法在双端队列前端添加新的元素。
- addBack(element) ：该方法在双端队列后端添加新的元素（实现方法和  Queue 类中的
  enqueue 方法相同）。
-  removeFront() ：该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的
  dequeue 方法相同）。
- removeBack() ：该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的
  pop 方法一样）。
- peekFront() ：该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek
  方法一样）。
- peekBack() ：该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek
  方法一样）。
- isEmpty()、size()、clear() 和 toString() 方法

