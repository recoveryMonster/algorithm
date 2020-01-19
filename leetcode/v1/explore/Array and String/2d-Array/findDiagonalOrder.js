/**
 * 对角线遍历
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 * 输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

0 1 2

1 2 3

2 3 4

会看到在对角线上的坐标和要么是奇数，要么是偶数
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  let yLen = matrix.length;
  let arr = [];
  if (matrix == null || yLen == 0) {
    return arr;
  }
  if (yLen == 1) {
    return matrix[0];
  }
  if (yLen == 2) {
    return matrix[0].concat(matrix[1]);
  }
  let row = 0;
  let column = 0;
  let xLen = matrix[0].length;
  for (let i = 0; i < xLen*yLen; ++i){
    arr.push(matrix[row][column]); // 初始化
    if ((row + column) % 2 == 0) { // 此时为偶数，右上方向
      if (column == xLen - 1) {// 边界是当列到最右边时，行向下
        row++;
      } else if (row == 0) {
        column++;
      } else {
        row--;
        column++;
      }
    } else { // 奇数时，左下方向
      if (row == yLen - 1) {
        column++;
      } else if (column == 0) {
        row++;
      } else {
        column--;
        row++;
      }
    }
  }
  return arr;
 
};