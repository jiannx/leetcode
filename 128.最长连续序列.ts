/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let maps = {};
  let max = 0;
  for (let n of nums) {
    maps[n] = 1;
  }
  for (let n of nums) {
    let count = 0;
    while (maps[n++]) {
      count += 1;
    }
    max = max > count ? max : count;
  }
  return max;
};
// @lc code=end

