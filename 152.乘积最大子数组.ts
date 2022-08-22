/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0]
  }
  let dpMax = new Array(nums.length).fill(0);
  let dpMin = new Array(nums.length).fill(0);
  dpMax[0] = nums[0];
  dpMin[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(dpMax[i - 1] * nums[i], nums[i], dpMin[i - 1] * nums[i]);
    dpMin[i] = Math.min(dpMax[i - 1] * nums[i], nums[i], dpMin[i - 1] * nums[i]);
    max = Math.max(max, dpMax[i])
  }
  return max;
};
// @lc code=end

