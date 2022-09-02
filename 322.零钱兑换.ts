/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // dp[i] 为 i元的最少硬币数
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      if (c > i) {
        continue;
      }
      dp[i] = Math.min(dp[i - c] + 1, dp[i]);
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount];
};
// @lc code=end

