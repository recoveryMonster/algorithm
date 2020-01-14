/**
 * 回文检查
 */
import { Deque } from '../../src/js/data-structures/Deque.mjs'
function palindromeChecker(aString) {
  if (typeof aString != 'string' ||
  (typeof aString == 'string' && aString.length == 0)) {
    return false;
  }

  const deque = new Deque();
  let isEqual = true;
  let firstChar, lastChar;
  const lowerString = aString.toLowerCase().split(' ').join('');// 将字符串转换为小写并去除空格
  for (let i = 0; i < lowerString.length; i++){
    deque.addBack(lowerString[i]);
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar != lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));