import { StackArray } from '../data-structures/stack-array.mjs';

// 十进制转二进制

function decimalToBinary(decNumber) {
  const remStack = new StackArray();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}


// 十进制转 2-36进制
function baseConverter(decNumber, base) {
  const remStack = new StackArray();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';
  if (base < 2 || base > 36) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}

export {
  decimalToBinary,
  baseConverter
}