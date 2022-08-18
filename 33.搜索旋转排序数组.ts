/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // >> 1 相当于除以2向下取整
    let mid = (end + start) >> 1;

    if (nums[mid] === target) {
      return mid;
    }

    // 中间数小于最右侧，则右边有序
    // 中间数大于右侧，则左边有序
    if (nums[mid] < nums[end]) {
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};
// @lc code=end

