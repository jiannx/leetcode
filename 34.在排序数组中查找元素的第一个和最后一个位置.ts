/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = (start + end) >> 1;
    if (nums[mid] === target) {
      let res = [mid, mid];
      while (nums[res[0] - 1] === target) {
        res[0]--;
      }
      while (nums[res[1] + 1] === target) {
        res[1]++;
      }
      return res;
    }
    if (nums[start] <= target && target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [-1, -1];
};
// @lc code=end

