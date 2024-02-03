/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    // 二进制右移一位，等于除以2
    mid = left + ((right - left) >> 1);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      // while 可以直接return
      return mid;
    }
  }
  return -1;
};
// @lc code=end

