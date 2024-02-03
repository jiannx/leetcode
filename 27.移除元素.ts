/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  /**
   * 双指针 
   * oldIndex始终向前获取数据进行比对
   * newIndex 始终为已经比对的数据中不相等的个数
   * 每次比对，将比对位置的数据移到新位置
   */
  let oldIndex = 0;
  let newIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[oldIndex] === val) {
      oldIndex += 1;
    } else {
      nums[newIndex] = nums[oldIndex];
      oldIndex += 1;
      newIndex += 1;
    }
  }
  return newIndex;
};
// @lc code=end

