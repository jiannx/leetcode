/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  let n = matrix.length;
  // 上下翻转
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      let temp = matrix[n - i - 1][j];
      matrix[n - i - 1][j] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  // [0,0][n,n] 轴翻转
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};
// @lc code=end

