/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  let dp = new Array(nums.length).fill(1);
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      dp[i] = Math.max(nums[j] < nums[i] ? dp[j] + 1 : 1, dp[i]);
    }
    max = Math.max(max, dp[i]);
  }
  console.log(dp)
  return max;
};
// @lc code=end
