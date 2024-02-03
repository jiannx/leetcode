/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  /**
   * 平方的最大值不是在左边就是在右边
   */
  let left = 0;
  let right = nums.length - 1;
  let res: number[] = [];
  while (left <= right) {
    if (Math.abs(nums[left]) > nums[right]) {
      res.unshift(nums[left] ** 2);
      left++;
    } else {
      res.unshift(nums[right] ** 2);
      right--;
    }
  }
  return res;
};
// @lc code=end

