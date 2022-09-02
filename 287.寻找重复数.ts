/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  let num
  for (let i = 0; i < nums.length; i++) {
    // 把当前值设为正数
    num = Math.abs(nums[i])
    // 第一次出现的时候设为负数
    if (nums[num - 1] > 0) {
      nums[num - 1] = -nums[num - 1]
    } else {
      // 第二次出现直接可以结束循环
      return num
    }
  }
};
// @lc code=end

