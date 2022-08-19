/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start

function numTrees(n: number): number {

  let res = { 0: 1, 1: 1 };

  function dp(n) {
    if (res[n]) {
      return res[n];
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
      count += dp(i) * dp(n - i - 1);
    }
    res[n] = count;
    return count;
  }
  dp(n);
  return res[n];
};
// @lc code=end

