/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let m = 0;
  let n = matrix[0].length - 1;
  let res = false;
  while (m < matrix.length && n >= 0) {
    if (matrix[m][n] === target) {
      res = true;
      break;
    } else if (matrix[m][n] > target) {
      n--;
    } else {
      m++;
    }
  }
  return res;
};
// @lc code=end

