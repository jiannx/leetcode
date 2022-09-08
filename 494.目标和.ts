/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  let res = [];
  function sum(ns, index, s) {
    if (ns.length === 0) {
      return;
    }
    let v = ns[index];
    let s1 = s + v;
    let s2 = s - v;
    if (index === nums.length - 1) {
      res.push(s1);
      res.push(s2);
    } else {
      sum(ns, index + 1, s1);
      sum(ns, index + 1, s2);
    }
  }
  sum(nums, 0, 0);
  return res.filter(v => v === target).length;
};
// @lc code=end

