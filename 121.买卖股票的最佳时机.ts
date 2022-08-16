/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let m = prices.length;
  let max = 0;
  let min = prices[0]
  for (let i = 1; i < m; i++) {
    min = Math.min(min, prices[i - 1]);
    let res = prices[i] - min;
    max = res > max ? res : max;
  }
  return max;
};
// @lc code=end

