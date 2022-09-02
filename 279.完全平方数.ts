/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
// https://leetcode.cn/problems/perfect-squares/solution/hua-jie-suan-fa-279-wan-quan-ping-fang-shu-by-guan/
function numSquares(n: number): number {
  let dp = new Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
    }
  }
  return dp[n];
};
// @lc code=end

