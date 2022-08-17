/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  let res = [];

  function dfs(path, leftCount, rightCount) {
    if (leftCount > n || rightCount > n || leftCount < rightCount) {
      return;
    }
    if (path.length === 2 * n) {
      res.push(path);
      return;
    }
    dfs(path + '(', leftCount + 1, rightCount);
    dfs(path + ')', leftCount, rightCount + 1);
  }
  dfs('', 0, 0);
  return res;
};
// @lc code=end

