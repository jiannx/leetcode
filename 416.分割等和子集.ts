/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((pre, cur) => pre + cur);
  // 如果和是奇数时，则不能分成两个和相等的集合
  if (sum % 2 != 0)
    return false;
  let n = nums.length;
  sum = sum / 2;
  let dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(sum + 1).fill(0));
  for (let i = 0; i <= n; i++) {//初始化dp
    dp[i][0] = 0;
  }


  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j < nums[i - 1]) {// 容量不足，装入不了第 i 个物品
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i - 1]] + nums[i - 1]);
      }
    }
  }

  return dp[n][sum] === sum;
};
// @lc code=end

