/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  let res = [];

  function dfs(arr, begin) {
    let sum = arr.reduce((v, sum) => sum + v, 0);
    if (sum === target) {
      res.push(arr);
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = begin; i < candidates.length; i++) {
      dfs([...arr, candidates[i]], i);
    }
  }
  dfs([], 0);
  return res;
};
// @lc code=end

