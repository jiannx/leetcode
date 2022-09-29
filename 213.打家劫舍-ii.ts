/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[1];
  }
  let n = nums.length;
  function getValue(ns) {
    let dp = [];
    dp[0] = ns[0];
    dp[1] = Math.max(dp[0], nums[1])
    for (let i = 2; i < ns.length; i++) {

    }
    return dp[ns.length - 1]
  }
  return Math.max(getValue(nums.slice(0, n - 2)), getValue(nums.slice(1, n - 1)))
};
// @lc code=end

