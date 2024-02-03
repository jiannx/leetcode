/*
 * @lc app=leetcode.cn id=452 lang=typescript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) {
    return 0;
  }
  let count = 0;
  let end = -Infinity;
  points.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < points.length; i++) {
    if (end < points[i][0]) {
      count += 1;
      end = points[i][1];
    }
  }
  return count;
};
// @lc code=end

