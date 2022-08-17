/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
  let count = new Array(nums.length).fill(0);
  for (let x of nums) {
    count[x - 1] += 1;
  }
  let res = [];
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 0) {
      res.push(i + 1);
    }
  }
  return res;
};
// @lc code=end

