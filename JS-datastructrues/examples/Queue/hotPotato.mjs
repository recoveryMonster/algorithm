/**
 * 循环队列-击鼓传花游戏 在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。
 * 某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。重复这个过程，
 * 直到只剩一个孩子（胜者）。
 * @param elementList array 人名列表
 * @param num Number 次数
 */
import { Queue } from '../../src/js/data-structures/Queue.mjs'
function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let i = 0; i < elementList.length; i++){
    queue.enqueue(elementList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue()); // 从队列开头移除一项，在将其移到队尾一项
    }
    eliminatedList.push(queue.dequeue()); // 淘汰的人
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);

// Camila was eliminated from the Hot Potato game.
// Jack was eliminated from the Hot Potato game.
// Carl was eliminated from the Hot Potato game.
// Ingrid was eliminated from the Hot Potato game.
// The winner is: John