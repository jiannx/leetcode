/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let m = intervals.length;
  let res = [];
  let index = 1;
  let range = intervals[0];
  while (index < m) {
    if (range[1] < intervals[index][0]) {
      res.push(range);
      range = intervals[index];
    } else {
      range = [range[0], Math.max(range[1], intervals[index][1])];
    }
    index++;
  }
  res.push(range);
  return res;
};
// @lc code=end

