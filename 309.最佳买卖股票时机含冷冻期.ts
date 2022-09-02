/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let len = prices.length;
  let dp = [];
  let i;
  if (prices.length <= 1) {
    return 0;
  }
  for (i = 0; i < len; i++) {
    dp[i] = [];
  }
  //   dp[i][0] 表示第 i 天 没有持有 股票得最大利润
  // dp[i][1] 表示第 i 天 持有 股票时得最大利润
  dp[0][0] = 0;
  dp[1][0] = Math.max(prices[1] - prices[0], 0);

  dp[0][1] = -prices[0];
  dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1]);
  for (let i = 2; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }
  return dp[len - 1][0];
};
// @lc code=end

