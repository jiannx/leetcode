/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let resSet: Set<number> = new Set(),
    nums1Set: Set<number> = new Set(nums1);
  for (let i of nums2) {
    if (nums1Set.has(i)) {
      resSet.add(i);
    }
  }
  return Array.from(resSet);
};
// @lc code=end

