/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  return (x ^ y).toString(2).split('').filter(x => x !== '0').length;
};
// @lc code=end

