/**
 * 至少是其他数字两倍的最大数
在一个给定的数组nums中，总是存在一个最大元素 。
查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
如果是，则返回最大元素的索引，否则返回-1。

示例 1:
输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 
示例 2:
输入: nums = [1, 2, 3, 4]
输出: -1
解释: 4没有超过3的两倍大, 所以我们返回 -1.
 */
/**
 * 数组里没有相同的最大元素 
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  const max = Math.max.apply(null, nums);
  const len = nums.length;
  let index = -1;
  for (let i = 0; i < len; i++){
    if ( index == -1 && max == nums[i]) {
      index = i;
    }
    if (index != i && max < 2 * nums[i]) {
      return -1;
    }
  }
  return index;
};

/**
 * 实际上课程并不考虑存在相同最大值的情况
 */
var dominantIndex = function(nums) {
  let max = nums[0];
  let len = nums.length;
  let index = 0;
  for (let i = 1; i < len; i++){
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }

  for (let i = 0; i < len; i++){
    if (i != index && max < 2*nums[i]) {
      return -1;
    }
  }
  return index;
};