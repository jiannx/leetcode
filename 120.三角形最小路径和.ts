/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  let n = triangle.length;
  let m = triangle[n - 1].length;
  // dp[j] 为到每行的j列的最优解
  let dp = new Array(n).fill(0)
  // 从最后一行开始计算，dp[0][0]为最终结果
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === n - 1) {
        dp[j] = triangle[i][j];
      } else {
        dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0];
};

function minimumTotal2(triangle: number[][]): number {
  let n = triangle.length;
  let m = triangle[n - 1].length;
  // dp[i][j] 为到i行j列的最优解
  let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  // 从最后一行开始计算，dp[0][0]为最终结果
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === n - 1) {
        dp[i][j] = triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};
// @lc code=end

