/*
 * @lc app=leetcode.cn id=877 lang=typescript
 *
 * [877] 石子游戏
 */

// @lc code=start
function stoneGame(piles: number[]): boolean {
  const length = piles.length;
  // dp[i][j].first 为 piles[i]-piles[j] 先手最大分时
  // dp[i][j].second 为 piles[i]-piles[j] 后手最大分时
  let dp: Array<Array<{ first: number; second: number }>>
    = Array.from({ length },
      () => Array.from({ length }, () => ({ first: 0, second: 0 }))
    );
  for (let i = 0; i < length; i++) {
    dp[i][i].first = piles[i];
    dp[i][i].second = 0;
  }

  // 因为dp[i][j] 依赖d p[i + 1][j] 和 dp[i][j - 1]，顾倒序遍历
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      // 先手那左边的最大分数
      const takeLeft = piles[i] + dp[i + 1][j].second;
      // 先手拿右边的最大分数
      const takeRight = piles[j] + dp[i][j - 1].second;
      // 先手拿最大分数
      dp[i][j].first = Math.max(takeLeft, takeRight);
      // 基于先手拿了哪个，确定后手的最大分数
      if (takeLeft > takeRight) {
        dp[i][j].second = dp[i + 1][j].first;
      } else {
        dp[i][j].second = dp[i][j - 1].first;
      }
    }
  }

  // console.log(dp);
  if (dp[0][length - 1].first > dp[0][length - 1].second) {
    return true;
  } else {
    return false
  }
};
// @lc code=end

