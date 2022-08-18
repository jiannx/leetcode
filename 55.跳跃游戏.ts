/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let m = nums.length;
  let dp = new Array(m).fill(false);
  dp[0] = true;
  for (let i = 1; i < m; i++) {
    let j = i - 1;
    let isArrived = false;
    while (j >= 0 && !isArrived) {
      if ((i - j) <= nums[j] && dp[j]) {
        isArrived = true;
        break;
      }
      j--;
    }
    dp[i] = isArrived;
  }
  console.log(dp);
  return dp[m - 1];
};
// @lc code=end

