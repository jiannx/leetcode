/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let minLenth = nums.length + 1;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    // 不断移动左指针，直到不能再缩小为止
    while (sum >= target) {
      minLenth = Math.min(minLenth, right - left + 1);
      sum = sum - nums[left++];
    }
    right++;
  }
  return minLenth === nums.length + 1 ? 0 : minLenth;
};
// @lc code=end

