/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let sortNums = nums.sort((a, b) => a - b);
  let count = 0;
  let num: number | null = null;
  let half = nums.length / 2;
  for (let i = 0; i < sortNums.length; i++) {
    if(sortNums[i] === num) {
      count += 1;
    } else {
      num = sortNums[i];
      count = 1;
    }
    if(count > half) {
      return num;
    }
  }
};
// @lc code=end

