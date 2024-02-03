/*
 * @lc app=leetcode.cn id=435 lang=typescript
 *
 * [435] 无重叠区间
 */

// @lc code=start
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) {
    return 0;
  }
  let count = 0;
  let end = -Infinity;
  intervals.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < intervals.length; i++) {
    if (end <= intervals[i][0]) {
      count += 1;
      end = intervals[i][1];
    }
  }
  return intervals.length - count;
};
// @lc code=end

