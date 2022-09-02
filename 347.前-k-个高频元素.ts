/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map();
  for (let n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  let arr = Array.from(map);
  arr.sort((a, b) => a[1] - b[1]);
  return arr.slice(arr.length - k).map(x => x[0]);
};
// @lc code=end

