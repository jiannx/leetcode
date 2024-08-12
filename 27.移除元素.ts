/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  /**
   * 双指针 
   * newIndex 始终为已经比对的数据中不相等的个数
   * 每次比对，将比对位置的数据移到新位置
   */
  let newIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[newIndex] = nums[i];
      newIndex += 1;
    }
  }
  return newIndex;
};
// @lc code=end

