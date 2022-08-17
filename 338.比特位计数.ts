/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
  let result = [];
  result[0] = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      result[i] = result[i / 2];
    } else {
      result[i] = result[i - 1] + 1;
    }
  }
  return result;
};
// @lc code=end

